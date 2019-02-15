import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Greetings=(props)=>
    <div>
        Hey you!!!! {props.firstName} {props.lastName}!
    </div>

const AppHello=()=>(
    <div>
        <Greetings firstName="John" lastName="Smith"/>
    </div>

); 

export default AppHello;

