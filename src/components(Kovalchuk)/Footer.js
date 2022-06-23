import React from 'react'
import { Row, Container, Col, Image, Button} from 'react-bootstrap';
import Instagram from '../image/Instagram.png';
import Telegram from '../image/Telegram.png';
import VK from '../image/VK.png';


  
const Footer = () => {
  return (<div>
    <hr className="Line" size="100px" width="1500px" align="center" color='black'/>
    <Container className="Footer">
  <Row className="Footer_size">
    <Col className="Footer1">
    <p><a className="Finfo" href="https://www.w3.org/">о городе</a></p>
    <p><a className="Fmuseum" href="https://www.w3.org/">музеи</a> </p>
    <p><a className="Ftheaters" href="https://www.w3.org/">театры</a> </p>
    <p><a className="Fphihalrmonic" href="https://www.w3.org/">филармонии</a> </p></Col>
    <Col className="Footer2">
    <p><a className="Fbook" href="https://www.w3.org/">словарь Тольяттинца</a></p>
    <p><a className="Gallery" href="https://www.w3.org/">фотогалерея</a></p>
    </Col>
    <Col className="Footer3">
    <form className="subscribe_form" >
     <input  type="text" className="subscribe_input" placeholder="Подписаться на новости!"/>
    
        </form>
        <Button className ='button2' variant="outline-dark">Готово</Button>
    </Col>
    <Col className="Footer4">
    <img className='icons' src={Instagram} width="50" height='50' />
    <img className='icons' src={Telegram} width="50" height='50' />
    <img className='icons' src={VK} width="50" height='50' />
    </Col>

  </Row>
  
</Container>
  
    </div>
  )
}

export default Footer