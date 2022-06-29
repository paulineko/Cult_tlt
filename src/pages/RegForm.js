import {Row, Container, Col, Button} from 'react-bootstrap';
import React,{useState} from 'react'
import { Personal_account } from './Personal_account';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Link} from "react-router-dom"




export const RegForm = ({showModal,setShowModal}) => {
  const handleClick = () => {
    window.open("http://localhost:3002/account");}
  return <>{showModal ? 
  <div className="popup_registration">
    <a class="close" href="/account">X</a>
    <h1 className='Registration'>Регистрация</h1>
    <Col className="Reg_popup">

                            <form className="registration_form_popup">
                                <input type="text" className="registration_input"
                                       placeholder="Придумайте логин"/>
                                        <input type="text" className="registration_input"
                                       placeholder="Введите email"/>
                                       <input type="password" className="registration_input"
                                       placeholder="Придумайте пароль"/>
                                        <input type="text" className="registration_input"
                                       placeholder="Повторите пароль"/>
                                      
                            </form></Col>
                           
                            <Button onClick={handleClick} className="button_reg_form" variant="outline-dark">Зарегистрироваться</Button>
  </div> : null}</>;
};
