import React from 'react';
import './components(Kovalchuk)/RunningLine.js';
import './App.css';
import './components(Kovalchuk)/Header.css'
import RunningLine from './components(Kovalchuk)/RunningLine.js';
import Search from './components(Kovalchuk)/Search.js';
import Logo from './components(Kovalchuk)/Logo.js'
import Header from './components(Kovalchuk)/Header.js';
import Footer from './components(Kovalchuk)/Footer.js';
import Museum from "./pages/Museum";
import Phihalrmonic from "./pages/Phihalrmonic";
import Theaters from "./pages/Theaters";
import Info from "./pages/Info";
import Dictionary from "./pages/dictionary";
import ScrollToTop from "./hooks/scrollToTop";
import { RegForm } from './pages/RegForm.js';
import {Button} from 'react-bootstrap';
import { useState } from 'react';
import { PopupStyle } from './components(Kovalchuk)/PopupStyle.js';
import { Photo } from './pages/Photo.js';
import Personal_account from './pages/Personal_account.js';
import Home_account from './pages/Home_account.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Favorite_place from './pages/Favorite_place.js';
import Setting_account from './pages/Setting_account.js';
import {Link} from "react-router-dom"


function App() {
    const [showModal,setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return (
        <div className="App">
            <RunningLine/>
            <Link to='/Home'>
                <Button className="Btn_reg_form">Личный кабинет</Button>
            </Link>
            
            
            <RegForm showModal={showModal} setShowModal={setShowModal}/>
            <PopupStyle/>
            <Search/>
            <Logo/>
            <Header/>
            <ScrollToTop>
                <Switch>
                    <Route path="/Museum">
                        <Museum/>
                    </Route>
                    <Route path="/Phihalrmonic">
                        <Phihalrmonic/>
                    </Route>
                    <Route path="/Theaters">
                        <Theaters/>
                    </Route>
                    <Route path="/dictionary">
                        <Dictionary/>
                    </Route>
                    <Route path ="/form">
                    <RegForm/>
                   </Route>
                   <Route path ="/Photo">
                    <Photo/>
                    </Route>
                    <Route path='/Home'>
                        <Personal_account/>
                        <Home_account/>
                    </Route>
                    <Route path='/Favorite_place'>
                        <Personal_account/>
                        <Favorite_place/>
                    </Route>
                    <Route path='/Setting_account'>
                        <Personal_account/>
                        <Setting_account/>
                    </Route>
                    <Route path="/">
                        <Info/>
                    </Route>
                </Switch>
            </ScrollToTop>
            <Footer/>
        </div>
    );
}

export default App;
