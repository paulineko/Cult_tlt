import React from 'react'
import Logotip from '../image/Краеведческий.jpg';
import { Row, Container, Col, Image, Button} from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Museum = () => {
  return (
  <div>
    <main>
      <Container className="size-container">
        <Row className='row-rast'>
         <Col className='row-col1'>
           <Image src={Logotip} width="539" height='329' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Краеведческий Музей</h1>
           <p>Мы - главный музей Тольятти. Мы меняем ценности, культуру, пространство. Мы побуждаем жителей и гостей укрепить свои отношения с городом.</p>
           <Button className ='button1' variant="outline-dark">Подробнее</Button>
         </Col>
         
        </Row>
       
 
      </Container>
    </main>

  </div>
  )
}

export default Museum