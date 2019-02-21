import React, {Component} from 'react';
import imageData from './../../slaider2.json';

class Image6 extends Component{

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

            this.sliderTimer();
            
        },this.props.interval)
    }

    sliderTimer(){
        let newPosition=parseInt(this.state.myStyle.left);
        
        if(newPosition<=0&&newPosition>=-500){
                       
            newPosition-=102;
        }
        if(newPosition<-500){
            newPosition=0;
        }

        this.setState({myStyle:{left:newPosition+'px'}})
    }

    render(){
        
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

export default Image6;