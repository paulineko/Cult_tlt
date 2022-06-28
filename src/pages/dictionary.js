import React from 'react'
import W2 from '../image/Баклажка.png';
import W3 from '../image/Вертушка.png';
import W4 from '../image/ДБ.png';
import W5 from '../image/Зеленка.jpg';
import W6 from '../image/Изолента.png';
import W7 from '../image/Изолента.png';
import W8 from '../image/Книжка.jpg';
import W9 from '../image/Муравьишки.jpg';
import W10 from '../image/НГ.jpg';
import W11 from '../image/ЗП.jpg';
import W12 from '../image/ПП.jpg';
import W13 from '../image/Свечка.jpg';
import W14 from '../image/СГ.jpg';
import W15 from '../image/ТЯ.png';
import W16 from '../image/Шлюз.jpg';
import W17 from '../image/Шоколадка.jpg';
import {Row, Container, Col, Image} from 'react-bootstrap';

const dictionary = () => {
    function scrollToLetter(args) {
        try {
            const lettersElements = document.querySelectorAll('.r-col1');
            for (let i = 0; i < lettersElements.length; ++i) {
                if (lettersElements[i].textContent.toLowerCase() === args.target.textContent.toLowerCase()) {
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
        return <a onClick={scrollToLetter} key={index} className='alphabet-letter'>{letter.toUpperCase()}</a>
    });

    return (
        <div>
            <div className="alphabet-container">{alphabet}</div>

            <Container className="s-container">
                <Row className='row-rast'>

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

                    <Col className='r-col-v'>
                        <Image className='photo-w' src={W3} width="520" height='300' fluid/>
                    </Col>

                    <Col className='r-col4'>
                        <h1>Вертушка</h1>
                        <p>Вертушка- это вход в ТРК "Русь-на-Волге" со стороны улицы революционной</p>
                    </Col>
                </Row>
            </Container>
            <Container className="s3-container">
                <Row className='row-rast'>

                    <Col className='r-col5'>
                        <Image className='photo-w' src={W4} width="720" height='300' fluid/>
                    </Col>

                    <Col className='r-col6'>
                        <h1>Дб</h1>
                        <p>Дб на тольяттинском сленге- Дворец бракосочетания. Под аббревиатурой подразумевается
                            крыша здания, ставшая излюбленным местом тусовок сразу несколько поколений молодежи</p>
                    </Col>

                
                </Row>


            </Container>
            <Container className="s4-container">
                <Row className='row-rast'>
                  

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W5} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Зеленка</h1>
                        <p>Дорога между Новым и Старым городом, а именно Лесопарковое шоссе</p>
                    </Col>
                </Row>
            </Container>
            <Container className="s-container">
                <Row className='row-rast'>

                   

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W6} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Изолента</h1>
                        <p>Здание генеральной дирекции АВТОВАЗ. Высотка характерного голубого цвета, на вершине
                            которой крутится огромная ладья - логотип бренда Lada</p>
                    </Col>
                </Row>
            </Container>
            <Container className="s2-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>К</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W7} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Карман</h1>
                        <p>Карман- проезд, идущий с дороги, который обычно ведет внутрь жилого квартала. Из-за того,
                            что Автозаводский район проектировался жилыми кварталами, появилась целая сеть карманов,
                            нужная для удобства попадания в тот или иной дом</p>
                    </Col>
                </Row>
            </Container>
            <Container className="s2-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p></p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W8} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Книжка</h1>
                        <p>Приемное отделение Тольяттинской городской клинической больницы №5</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s3-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>М</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W9} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Муравьишки</h1>
                        <p>Острова возле набережной 8го квартала</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s4-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>Н</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W10} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Новый город</h1>
                        <p>После того, как начали строить Автозаводский район, название Новый город перекочевало к
                            нему</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>П</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W11} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Петушок</h1>
                        <p>Торговый центр в 7 квартале, в народе раньше назывался петушок из-за находящегося в нем
                            кафе "Золотой петушок"</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p></p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W12} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>ПП</h1>
                        <p>ПП- Парк Победы. На лавочках центральной аллеи любили собираться молодые, а лестницы и
                            парапеты у Вечного огня облюбовали скейтеры и другие экстремалы</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s2-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>С</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W13} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Свечка</h1>
                        <p>Свечка- это памятник героям Великой Отечественной Войны на Площади Свободы в Центральном
                            районе Тольятти. На парапетах обелиска, который по форме напоминает свечу, любят
                            кататься скейтеры.</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s2-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p></p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W14} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Старый город</h1>
                        <p>Центральный район</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s3-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>Т</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W15} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Тещин язык</h1>
                        <p>Сложный перекресток/кольцо на пересечении 70 лет Октября, Ворошилова и Полякова</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s4-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p>Ш</p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W16} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Шлюз</h1>
                        <p>Шлюзовой район. Маленький район в стиле сталинского ампира распологается прямо около ГЭС,
                            за это его называют Маленьким Петербургом</p>
                    </Col>
                </Row>


            </Container>
            <Container className="s4-container">
                <Row className='row-rast'>

                    <Col className='r-col1'>
                        <p></p>
                    </Col>

                    <Col className='r-col2'>
                        <Image className='photo-w' src={W17} width="300" height='300' fluid/>
                    </Col>

                    <Col className='r-col3'>
                        <h1>Шоколадка</h1>
                        <p>Научно-Технический Центр АВТОВАЗ. Представляет собой большое конструктивистское здание
                            шоколадного цвета. В купе панельной отделкой создает ассоциации к плитке шоколада</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default dictionary