import React from 'react'
import Logotip from '../image/Дилижанс.jpg';
import { Row, Container, Col, Image, Button} from 'react-bootstrap';


const Theaters = () => {
  return (
    <div>
<main>
      <Container className="size-container">
        <Row className='row-rast'>
         <Col className='row-col1'>
           <Image className='photo' src={Logotip} width="539" height='329' fluid />
         </Col>
         <Col className='row-col2'>
           <h1>Театр Дилижанс</h1>
           <p>Театр Юных Зрителей Дилинжас может вас обмануть своим названием, так как в репертуаре имеется и проходит большое количество постановок исключительно для взрослых. Здесь всегда найдется история для любой аудиторий, которая не боится нового и оригинального.</p>
           <Button className ='button1' variant="outline-dark">Подробнее</Button>
         </Col>
         
        </Row>
       
 
      </Container>
      </main>


    </div>
  )
}

export default Theaters