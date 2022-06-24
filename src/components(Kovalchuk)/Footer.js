import React from 'react'
import {Row, Container, Col, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"
import Instagram from '../image/Instagram.png';
import Telegram from '../image/Telegram.png';
import VK from '../image/VK.png';

const Footer = () => {
    return (
        <div>
            <nav>
                <hr className="Line" size="100px" width="1500px" align="center" color='black'/>
                <Container className="Footer">
                    <Row className="Footer_size">
                        <Col className="Footer1">
                            <p> <Link className="Finfo" to="/">о городе</Link></p>
                            <p><Link  className="Fmuseum"  to="/museum">музеи</Link></p>
                            <p> <Link className="Ftheaters" to="/theaters">театры</Link></p>
                            <p> <Link className="Fphihalrmonic" to="/phihalrmonic">филармонии</Link></p></Col>
                        <Col className="Footer2">
                            <p><Link className="Fbook" to="/dictionary">словарь Тольяттинца</Link></p>
                            <p><a className="Gallery" href="https://www.w3.org/">фотогалерея</a></p>
                        </Col>
                        <Col className="Footer3">
                            <form className="subscribe_form">
                                <input type="text" className="subscribe_input"
                                       placeholder="Подписаться на новости!"/>
                            </form>
                            <Button className='button2' variant="outline-dark">Готово</Button>
                        </Col>
                        <Col className="Footer4">
                            <img className='icons' src={Instagram} width="50" height='50'/>
                            <img className='icons' src={Telegram} width="50" height='50'/>
                            <img className='icons' src={VK} width="50" height='50'/>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </div>
    )
}

export default Footer