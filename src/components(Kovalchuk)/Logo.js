import React, { Component } from 'react';
import Logotip from '../image/Логотип.png';

export default class Search extends Component{
    render(){
        return(
            <div>
<img src={Logotip} width="280" height='70' />
<hr className="Line" size="100px" width="10000px" align="center" color='black'/>
            </div>

        )
    }
    }