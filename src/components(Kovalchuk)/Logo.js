import React, {Component} from 'react';
import Logotip from '../image/Логотип.png';

export default class Search extends Component {
    render() {
        return (
            <div>
                <img src={Logotip} width="280" height='70' alt={''}/>
                <hr className="Line" size="100px" width="1500px" align="center" color='black'/>
            </div>
        )
    }
}