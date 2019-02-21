import React, {Component} from 'react';
import imageData from './../../slaider2.json';

class Image5 extends Component{

    constructor(props){
        super(props);

        this.state={

            images:imageData,
            currentIndex:0,
            maxIndex:imageData.length-1,
            myStyle:{
                left:'0px'
            }

        };


    };

    componentDidMount(){
        // console.log("component Did Mount");
       
        setInterval(()=>{

            // this.sliderTimer();
            
        },4000)
    }

    // FIXME:
    sliderTimer(){
        let newPosition=parseInt(this.state.myStyle.left);
        console.error('newPosition=',newPosition);
        if(newPosition<0&&newPosition>-400){
            console.error('ky ky')
            newPosition=100;
        }
        if(newPosition<=-400){
            newPosition=0;
        }


        this.setState({myStyle:{left:newPosition+'px'}})
    }

    render(){
        // example:
        // const template = Object.keys(data.books).map(item => <span key={data.books[item].id}>{data.books[item].author} - {data.books[item].name}</span>)
        const template=Object.keys(imageData).map(index=>
            <div key={index} className='oneSlider'>
                <h3>{imageData[index].name}</h3>
                <img  src={imageData[index].src} alt={imageData[index].alt} />

            </div>)


        return(
            <div style={this.state.myStyle} className='slider5'>

               {template}

            </div>
        );
    };
}

export default Image5;