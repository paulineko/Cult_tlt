import React from 'react';
import './components(Kovalchuk)/RunningLine.js';
import './App.css';
import './components(Kovalchuk)/Header.css'
import RunningLine from './components(Kovalchuk)/RunningLine.js';
import Search from './components(Kovalchuk)/Search.js';
import Logo from './components(Kovalchuk)/Logo.js'
import Header from './components(Kovalchuk)/Header.js';
import Footer from './components(Kovalchuk)/Footer.js';
import {Route, Switch} from "react-router-dom";
import Museum from "./pages/Museum";
import Phihalrmonic from "./pages/Phihalrmonic";
import Theaters from "./pages/Theaters";
import Info from "./pages/Info";
import Dictionary from "./pages/dictionary";
import ScrollToTop from "./hooks/scrollToTop";


function App() {
    return (
        <div className="App">
            <RunningLine/>
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
