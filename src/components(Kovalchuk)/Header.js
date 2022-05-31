import React,{Component} from 'react'
import './Header.css'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Info from '../pages/Info'
import Museum from '../pages/Museum';
import Phihalrmonic from '../pages/Phihalrmonic';
import Theaters from '../pages/Theaters';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
<Router>
    <div className="Header">
      <nav>
        <ul>
          <li className="info">
            <Link className="info_text" to="/">о городе</Link>
          </li>
          <li className="museum">
            <Link className="museum_text" to="/museum">музеи</Link>
          </li>
          <li className="theaters">
            <Link className="theaters_text" to="/theaters">театры</Link>
          </li>
          <li className="phihalrmonic">
            <Link className="phihalrmonic_text" to="/phihalrmonic">филармонии</Link>
          </li>
          
        </ul>
      </nav>
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
<Route path="/">
  <Info/>
  </Route>
  <Info/>
      </Switch>
    </div>
    </Router>
  )
}

export default Header