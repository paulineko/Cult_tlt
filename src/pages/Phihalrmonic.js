import React from 'react'
import Logotip from '../image/Филармония.jpg';

import { Row, Container, Col, Image, Button} from 'react-bootstrap';


const Phihalrmonic = () => {
  return (
    <div>
<main>
      <Container className="size-container">
        <Row className='row-rast'>
         <Col className='row-col1'>
           <Image className='photo' src={Logotip} width="539" height='329' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Тольяттинская филармония</h1>
           <p>Тольяттинская филармония это “дом музыки” в Тольятти, каждый год именно в этом месте раскрывается красота искусства  для более сотни тысяч граждан. Проходящие здесь выступления опьяняют слушателей и зрителей, куда мы вас и приглашаем(предлагаем посетить).</p>
           <Button className ='button1' variant="outline-dark">Подробнее</Button>
         </Col>
        </Row>
      </Container>


     
      </main>

    </div>
  )
}

export default Phihalrmonic