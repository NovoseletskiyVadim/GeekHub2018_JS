import React from 'react';

function Greeting(){

    const name = "Vadim";
    const date= new Date(2018,19,31,16);
    const hours=date.getHours();

    let timeNow;

    const myStyle={
        fontSize:'2.7em'
    }

    if(hours<12){
        timeNow="Mornong";
        // пример динамического изменения стилей
        myStyle.color="#04756F";
    }else if(hours>12&&hours<17){
        timeNow="Afternoon";
        myStyle.color='#2E0927';
    }else{
        timeNow="Night";
        myStyle.color='#D90000';

    }

    return(
        <h1 style={myStyle}> Good {`${timeNow}. My name is ${name}.`} </h1>
    )

}

export default Greeting;
