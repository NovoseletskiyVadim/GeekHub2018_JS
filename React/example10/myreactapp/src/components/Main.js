import React from 'react';
import Greeting from './Greeting';
const Main=(props)=>{
    const {item1, item2, item3}=props;

    return(
        <div>
        <p> Это основной блок</p>
        <Greeting/>
        <ul>
            <li>item1= {item1}</li>
            <li>item2= {item2}</li>
            <li>item3= {item3}</li>
        </ul>
    </div> 
    )
   
}; 

export default Main
    