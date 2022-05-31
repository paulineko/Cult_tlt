import React from 'react'
import Logotip from '../image/Краеведческий.jpg';
import Logotip2 from '../image/ОСИ.jpg';
import Logotip3 from '../image/ТХМ.jpeg';
import { Row, Container, Col, Image, Button} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Museum = () => {
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
           <p>Мы - главный музей Тольятти. Мы меняем ценности, культуру, пространство. Мы побуждаем жителей и гостей укрепить свои отношения с городом.</p>
           <Button className ='button1' variant="outline-dark">Подробнее</Button>
         </Col>
         
        </Row>
       
 
      </Container>

      <Container className="size-container">
        <Row className='row-rast'>
         <Col className='row-col1'>
           <Image className='photo' src={Logotip2} width="539" height='329' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>ОСИ ТХМ</h1>
           <p>Здесь можно не только понять непонятное и встать на ступень выше в духовном развитии, но и пообщаться с самыми разными субкультурами. Данный музей еще не стал мейнстримным, поэтому поторопись!</p>
           <Button className ='button1' variant="outline-dark">Подробнее</Button>
         </Col>
         
        </Row>
       
 
      </Container>

      <Container className="size-container">
        <Row className='row-rast'>
         <Col className='row-col1'>
           <Image className='photo' src={Logotip3} width="539" height='329' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>ТХМ</h1>
           <p>Тольяттинского художественный музей, это не только тысячи работ переданных союзом художников со времен СССР, но и без того богатый фонд наполненный культурой старых лет продолжает пополнятся, благодаря хорошей команде каждый год музей сотрудничает с зарубежными авторами и устраивает на радость любителям духовного развития новые выставки и показывает новые работы</p>
           <Button className ='button1' variant="outline-dark">Подробнее</Button>
         </Col>
         
        </Row>
       
 
      </Container> 
    </main>

  </div>
  )
}

export default Museum