import React from 'react';
import './Header.css';

// Пример динамического изменеия
//  стилей в замисимости от времени суток 

const Header=()=>{

    // const date=new Data(2018,19,31,16);
    const date=new Date();
    const hours=date.getHours();
    let timeNow;

    const myStyle={
        fontSize:'1.7em'
       
    }

    if (hours>=4&&hours<12){
        timeNow='Morning';
        myStyle.color='white';
        myStyle.backgroundColor="rgb(7, 64, 221)"
    }
    else if(hours>=12&&hours<17){
        timeNow="Afternoon";
        myStyle.color='white';
        myStyle.backgroundColor="#2E0927"
    }
    else if(hours>=17&&hours<23){
        timeNow="Evening";
        myStyle.color='white';
        myStyle.backgroundColor="#2E0927"
    }
    else{
        timeNow="Night";
        myStyle.color='white';
        myStyle.backgroundColor="#D90000"
    }


    return(
        <div className="header" style={myStyle}>
            <p>Good {`${timeNow}`}</p>
        </div>
    )
}

export default Header;