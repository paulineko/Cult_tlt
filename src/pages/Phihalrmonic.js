import React from 'react'
import Logotip from '../image/Филармония.jpg';
import W2 from '../image/Баклажка.jpg';
import W3 from '../image/Вертушка.jpg';
import W4 from '../image/ДБ.jpg';
import W5 from '../image/Зеленка.jpg';
import W6 from '../image/Изолента.jpg';
import W7 from '../image/Изолента.jpg';
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