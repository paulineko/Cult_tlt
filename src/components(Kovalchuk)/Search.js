import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import Lupa from '../image/Лупа.png';
import '../App.css';


export default class Search extends Component {
    render() {
        return (
            <div className="form">
                <form className="search_form">
                    <input
                        type="text"
                        className="seach_input"
                    />
                    <Button><img src={Lupa} width="15" height="15"/></Button>
                </form>
            </div>
        )
    }
}