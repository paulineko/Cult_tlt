import React, { Component } from 'react';
import { Container,  Nav,  NavbarBrand, Navbar, NavLink, } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Header.css'
import Info from '../pages/Info'
import Museum from '../pages/Museum';
import Phihalrmonic from '../pages/Phihalrmonic';
import Theaters from '../pages/Theaters';



const Header = () => {
  return (
  <>
 
 <Navbar bg="light" variant="light">
    <Container>
    
    <Nav className="me-auto">
     
    </Nav>
    </Container>
  </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Info} />
                        <Route exact path="/museum" component={Museum} />
                        <Route exact path="/phihalrmonic" component={Phihalrmonic} />
                        <Route exact path="/theaters" component={Theaters} />

                    </Switch>
                </Router>
            </>

  )
}

export default Header