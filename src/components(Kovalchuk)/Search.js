import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Lupa from '../image/Лупа.png';
import '../App.css';


export default class Search extends Component {
    render() {
        return (
            <div className="form">
                <form className="search-form">
                    <input
                        type="text"
                        className="search-input"
                    />
                    <Button><img src={Lupa} width="15" height="15" alt={''}/></Button>
                </form>
            </div>
        )
    }
}