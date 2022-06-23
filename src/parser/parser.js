
const fetch = require('node-fetch');
const jsdom = require('jsdom');

function stripSpaces(str) {
    if (!str)
        return str;

    str = str?.trim();
    str = str?.replaceAll('\n', '');

    let replaced = true;
    do {
        const newStr = str?.replaceAll('  ', ' ');
        replaced = newStr !== str;
        str = newStr;
    } while (replaced);

    return str;
}

function Event() {
    this.date = null;
    this.name = null;
    this.description = null;
    this.minAge = '0+';
    this.price = null;
}

function EventParserConfig(url = '', blockName = '', title = [], description = [],
                     date = [], price = [], minAge = []) {
    this.eventsURL = url;
    this.eventsOpts = {
        'blockName': blockName, // string
        'title': title, // string array
        'description': description, // string array
        'date': date, // string array
        'price': price, // string array
        'minAge': minAge, // string array
    }
}

async function getContentFromURL(url) {
    let content = null;
    const response = await fetch(url, {method: 'GET'});
    if (response.ok) {
        content = await response.text();
    }
    return content;
}

function getElementBodyValue(element) {
    if (element?.textContent) {
        return element.textContent;
    } else if (element?.text) {
        return element.text;
    }
    return null;
}

function recursiveElementSearch(element, selector) {
    if (!element?.children)
        return null;

    try {
        const foundElem = element.querySelector(selector);
        if (foundElem)
            return foundElem;
    } catch (e) {
    }

    const children = Array.from(element.children);
    for (let i = 0; i < children.length; ++i) {
        const foundElem = recursiveElementSearch(children[i], selector);
        if (foundElem)
            return foundElem
    }
    return null;
}

function recursiveElementsSearch(element, selectors) {
    if (!selectors)
        return null;

    const selectorsCount = selectors?.length ?? 0;
    if (!selectorsCount)
        return null;

    let elem = element;
    for (let i = 0; i < selectorsCount; ++i) {
        elem = recursiveElementSearch(elem, selectors[i]);
        if (!elem)
            break;
    }
    return elem;
}

async function getEvents(htmlContent, contentConfig) {
    const document = new jsdom.JSDOM(htmlContent).window.document;

    const eventsOpts = contentConfig.eventsOpts;
    const pageEvents = recursiveElementSearch(document, eventsOpts.blockName);
    const events = [];
    if (pageEvents) {
        const elements = Array.from(pageEvents.children);
        elements.forEach((element) => {
            const event = new Event();
            event.name = stripSpaces(getElementBodyValue(recursiveElementsSearch(element, eventsOpts.title)));
            if (event.name) {
                event.description = stripSpaces(getElementBodyValue(recursiveElementsSearch(element, eventsOpts.description)));
                event.date = stripSpaces(getElementBodyValue(recursiveElementsSearch(element, eventsOpts.date)));
                event.price = getElementBodyValue(recursiveElementsSearch(element, eventsOpts.price));
                event.minAge = getElementBodyValue(recursiveElementsSearch(element, eventsOpts.minAge));
                events.push(event);
            }
        })
    } else {
        console.error('Events element not found!');
    }
    return events;
}

export default function getEventsInformation() {
    const websites = {
        'filarman': new EventParserConfig(
            'http://filarman.ru/events/%d0%bf%d1%80%d0%b5%d0%b4%d1%81%d1%82%d0%be%d1%8f%d1%89%d0%b5%d0%b5/',
            '#tribe-events-loop',
            ['.entry-title', 'a'],
            ['p'],
            ['tbody', '[itemprop=startDate]'],
            ['tbody', '[itemprop=price]']),
        'koleso': new EventParserConfig(
            'http://teatr-koleso.ru/afisha/',
            '.tab-content.active',
            ['.xs-12-12.md-12-7 ', '.afisha-item-name'],
            ['.xs-12-12.md-12-7 ', '.vxs-12-12.xs-12-7', '.afisha-item-description'],
            ['.vxs-12-12.xs-10-4.md-12-2', '.afisha-item-date', '.day'],
            [],
            ['.vxs-12-12.xs-10-4.md-12-2', '.afisha-item-date', '.age']),
        'armuseum': new EventParserConfig(
            'http://armuseum.ru/exhibition/',
            '.content',
            ['.painter-main-img-info'],
            [],
            ['.painter-main-img-data']
            )
    };

    const result = {};

    Object.keys(websites).forEach((name) => {
        const config = websites[name];
        getContentFromURL(config.eventsURL).then((content) => {
            if (content) {
                getEvents(content, config).then((events) => {
                    result[name] = events;
                })
            }
        })
    })

    return result;
}
