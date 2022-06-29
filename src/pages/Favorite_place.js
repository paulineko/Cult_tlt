import React from 'react'
import Logotip from '../image/Краеведческий.jpg';
import Logotip2 from '../image/Филармония.jpg';
import Logotip3 from '../image/ТХМ.jpeg';
import { Row, Container, Col, Image, Button} from 'react-bootstrap';
import Reiting from '../image/Оценка.png';
import Reiting1 from '../image/Оценка.png';

export default function Favorite_place() {
  return (
    <div>
    <main>
      <Container className="size-container">
        <Row className='row-rast'>
         <Col className='row-col1'>
           <Image className='photo' src={Logotip} width="539" height='329' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Краеведческий Музей</h1>
           <p>Сегодня побывала в краеведческом музее города Тольятти и прибываю в восторге! С какой любовью и профессионализмом подошли к оформлению экспозиций! Какие интересные фотографии, вещи, как интересно и креативно оформлены витрины! Замечательно преподносится информация и QR коды очень уместны. Персонал приветливый и трепетно относящийся к своему музею и истории края. Огромное спасибо!</p>
           <Image  src={Reiting} width="170" height='30' fluid />
         </Col>         
        </Row>
      </Container>

      <Container className="size-container">
        <Row className='row-rast'>
         <Col className='row-col1'>
           <Image className='photo' src={Logotip2} width="539" height='329' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Тольяттинская филармония</h1>
           <p>С удовольствием посещаю некоторые концерты. В основном люблю послушать симфоническую музыку. Дирижёр с прекрасным тонким чувством юмора. А вот цены в местном буфете кусаются и даже очень. Кроме того нет терминала для оплаты картой. Но можно онлайн, если хорошая связь.</p>
           <Image  src={Reiting1} width="170" height='30' fluid />
         </Col>
        </Row>
      </Container>
    </main>

  </div>
  )
}
