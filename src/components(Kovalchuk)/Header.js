import React, {Component} from 'react'
import './Header.css'
import {Link} from "react-router-dom"

const Header = () => {
    return (
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
        </div>
    )
}

export default Header