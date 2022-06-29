import React from 'react'
import Goal1 from '../image/Цель4.png';
import Goal2 from '../image/Цель5.png';
import Goal3 from '../image/Цель6.png';
import Goal4 from '../image/Цель1.png';
import Goal5 from '../image/Цель2.png';
import Goal6 from '../image/Цель3.png';
import Goal7 from '../image/Цель7.png';
import Goal8 from '../image/Цель8.png';
import Goal9 from '../image/Цель9.png';
import Goal10 from '../image/Цель10.png';
import { Row, Container, Col, Image, Button} from 'react-bootstrap';


export default function Setting_account() {
  return (
    <div>
    <main>
      <Container className="size-container">
        <Row className='row-goal'>
         <Col className='row-goal1'>
           <Image className='photo' src={Goal1} width="100" height='100' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Первый раз?</h1>
           <p>Дается за первое посещение места, (5% скидки на продукцию, можно использовать в течение часа после получения!)</p>
         </Col>         
        </Row>
      </Container>

      <Container className="size-container">
        <Row className='row-goal'>
         <Col className='row-goal1'>
           <Image className='photo' src={Goal2} width="100" height='100' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Давай ещё!</h1>
           <p>Выдается за посещение пяти мест,(5% скидка на продукцию!).</p>
         </Col>
        </Row>
      </Container>
      <Container className="size-container">
        <Row className='row-goal'>
         <Col className='row-goal1'>
           <Image className='photo' src={Goal3} width="100" height='100' fluid />
         </Col>
         <Col className='row-col2'>
           <h1> Мы же ещё не закончили?</h1>
           <p>Выдаётся за посещение десяти мест, (10% на всю продукцию!)</p>
         </Col>
        </Row>
      </Container>
      <Container className="size-container">
        <Row className='row-goal'>
         <Col className='row-goal1'>
           <Image className='photo' src={Goal4} width="100" height='100' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Не останавливайся! Ты крут!</h1>
           <p>Выдаётся за посещение двадцати мест! (скидка на мерч 10%)</p>
         </Col>
        </Row>
      </Container>
      <Container className="size-container">
        <Row className='row-goal'>
         <Col className='row-goal1'>
           <Image className='photo' src={Goal5} width="100" height='100' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Это невероятно!</h1>
           <p>Выдаётся за посещение пятидесяти мест! (скидка на мерч 20%)</p>
         </Col>
        </Row>
      </Container>
      <Container className="size-container">
        <Row className='row-goal'>
         <Col className='row-goal1'>
           <Image className='photo' src={Goal6} width="100" height='100' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Можно с тобой?</h1>
           <p>Выдается за посещение ста мест(можно либо подарок от нас кепка, брелок и тд, либо билет на мероприятие)
</p>
         </Col>
        </Row>
      </Container>
      <Container className="size-container">
        <Row className='row-goal'>
         <Col className='row-goal1'>
           <Image className='photo' src={Goal7} width="100" height='100' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Собери их всех!</h1>
           <p>Выдаётся за посещение пяти мест подряд.</p>
         </Col>
        </Row>
      </Container>
      <Container className="size-container">
        <Row className='row-goal'>
         <Col className='row-goal1'>
           <Image className='photo' src={Goal8} width="100" height='100' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Вау! Это редкость!</h1>
           <p>Выдаётся за посщение малоизвестного или малопопулярного места.</p>
         </Col>
        </Row>
      </Container>
      <Container className="size-container">
        <Row className='row-goal'>
         <Col className='row-goal1'>
           <Image className='photo' src={Goal9} width="100" height='100' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Ого! Ты леший?</h1>
           <p>Выдаётся за посещения места в лесу.</p>
         </Col>
        </Row>
      </Container>
      <Container className="size-container">
        <Row className='row-goal'>
         <Col className='row-goal1'>
           <Image className='photo' src={Goal10} width="100" height='100' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Да просто умница!</h1>
           <p>Выдаётся,если поможешь нам найти место о котором было неизвестно.</p>
         </Col>
        </Row>
      </Container>
    </main>

  </div>
  )
}
