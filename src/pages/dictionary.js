import React from 'react'
import W2 from '../image/баклажка.png';
import W3 from '../image/вертушка.png';
import W4 from '../image/ДБ.png';
import W6 from '../image/Изолента.png';
import W7 from '../image/к_буква.png';
import W8 from '../image/К_книжка.png';
import W9 from '../image/Муравьишки.png';
import W12 from '../image/ПП.png';
import W14 from '../image/СГ.jpg';
import W15 from '../image/ТЯ.png';
import W17 from '../image/Буква_З.png';
import W18 from '../image/с_буква.png';
import W19 from '../image/ш_буква.png';
import {Row, Container, Col, Image} from 'react-bootstrap';

const dictionary = () => {
    function scrollToLetter(args) {
        try {
            const searchLetter = args.target.id.split('alphabet-letter-')[1].toLowerCase();
            const lettersElements = document.querySelectorAll('.r-col1');
            for (let i = 0; i < lettersElements.length; ++i) {
                if (lettersElements[i].textContent.toLowerCase() === searchLetter) {
                    window.scrollTo({
                        top: lettersElements[i].offsetTop,
                        left: 0,
                        behavior: 'smooth'
                    })
                    break;
                }
            }
        } catch (e) {
            console.error('Unable to find alphabet elements!');
        }
    }

    const alphabet = Array.from('абвгдеёжзийклмнопрстуфхцчшщъыьэюя').map((letter, index) => {
        let image = null;
        try {
            image = require(`../image/alphabet/${letter.toUpperCase()}.png`);
        } catch (e) {}
        return image ? <img className='alphabet-letter' id={`alphabet-letter-${letter}`} onClick={scrollToLetter} key={index} src={image} alt={''}/> : null;
    });

    return (
        <div>
            <div className="alphabet-container"><div className='alphabet-child'>{alphabet}</div></div>

            <Container className="s-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>Б</p>
                    </Col> 

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W2} width="390" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Баклажка</h1>
                        <p>В обиходе - пластиковая бутылка</p>
                    </Col>
                </Row>
            </Container>

            <Container className="s2-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>В</p>
                    </Col>

                    <Col className='r-col-v'>
                        <Image className='photo-w' src={W3} width="588" height='327' fluid/>
                    </Col>

                    <Col className='r-col4'>
                        <h1>Вертушка</h1>
                        <p>Вертушка- это вход в ТРК "Русь-на-Волге" со стороны улицы революционной</p>
                    </Col>
                </Row>
            </Container>
            
            <Container className="s3-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>Д</p>
                    </Col>

                    <Col className='r-col5'>
                        <Image className='photo-w' src={W4} width="680" height='280' fluid/>
                    </Col>

                    <Col className='r-col6'>
                        <h1>Дб</h1>
                        <p>Дб на тольяттинском сленге - Дворец бракосочетания. Под аббревиатурой подразумевается
                            крыша здания, ставшая излюбленным местом тусовок сразу несколько поколений молодежи</p>
                    </Col>
                </Row>
            </Container>

            <Container className="s4-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>З</p>
                    </Col>    

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W17} width="160" height='260' fluid/>
                    </Col>              

                    <Col className='r-col7'>
                        <h1>Зеленка</h1>
                        <p>Дорога между Новым и Старым городом, а именно Лесопарковое шоссе</p>
                    </Col>
                </Row>
            </Container>

            <Container className="s2-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>И</p>
                    </Col>

                    <Col className='r-col9'>
                        <Image className='photo-w' src={W6} width="580" height='390' fluid/>
                    </Col>

                    <Col className='r-col10'>
                        <h1>Изолента</h1>
                        <p>Здание генеральной дирекции АВТОВАЗ. Высотка характерного голубого цвета, на вершине
                            которой крутится огромная ладья - логотип бренда Lada</p>
                    </Col>
                </Row>
            </Container>

            <Container className="s5-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>К</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W7} width="150" height='190' fluid/>
                    </Col>

                    <Col className='r-col7'>
                        <h1>Карман</h1>
                        <p>Карман- проезд, идущий с дороги, который обычно ведет внутрь жилого квартала. Из-за того,
                            что Автозаводский район проектировался жилыми кварталами, появилась целая сеть карманов,
                            нужная для удобства попадания в тот или иной дом</p>
                    </Col>
                </Row>
            </Container>
            <Container className="s3-container">
                <Row className='row-rast'>

                    <Col className='r-col9'>
                        <Image className='photo-w' src={W8} width="440" height='410' fluid/>
                    </Col>

                    <Col className='r-col10'>
                        <h1>Книжка</h1>
                        <p>Приемное отделение Тольяттинской городской клинической больницы №5</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s6-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>М</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W9} width="205" height='270' fluid/>
                    </Col>

                    <Col className='r-col7'>
                        <h1>Муравьишки</h1>
                        <p>Острова возле набережной 8го квартала</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>П</p>
                    </Col>

                    <Col className='r-col5'>
                        <Image className='photo-w' src={W12} width="654" height='422' fluid/>
                    </Col>

                    <Col className='r-col8'>
                        <h1>Петушок</h1>
                        <p>Торговый центр в 7 квартале, в народе раньше назывался петушок из-за находящегося в нем
                            кафе "Золотой петушок"</p>
                        <h1>ПП</h1>
                        <p>ПП- Парк Победы. На лавочках центральной аллеи любили собираться молодые, а лестницы и
                            парапеты у Вечного огня облюбовали скейтеры и другие экстремалы</p>
                    </Col>
                </Row>
            </Container>

            <Container className="s7-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>С</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W18} width="160" height='267' fluid/>
                    </Col>

                    <Col className='r-col7'>
                        <h1>Свечка</h1>
                        <p>Свечка- это памятник героям Великой Отечественной Войны на Площади Свободы в Центральном
                            районе Тольятти. На парапетах обелиска, который по форме напоминает свечу, любят
                            кататься скейтеры.</p>

                        <h1>Старый город</h1>
                        <p>Центральный район</p>
                    </Col>
                </Row>
                
            </Container>

            <Container className="s2-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>Т</p>
                    </Col>

                    <Col className='r-col-v'>
                        <Image className='photo-w' src={W15} width="440" height='347' fluid/>
                    </Col>

                    <Col className='r-col4'>
                        <h1>Тещин язык</h1>
                        <p>Сложный перекресток/кольцо на пересечении 70 лет Октября, Ворошилова и Полякова</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s8-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>Ш</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W19} width="218" height='267' fluid/>
                    </Col>

                    <Col className='r-col7'>
                        <h1>Шлюз</h1>
                        <p>Шлюзовой район. Маленький район в стиле сталинского ампира распологается прямо около ГЭС,
                            за это его называют Маленьким Петербургом</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default dictionary