import React, {Component} from 'react';
import imageData from './../../slider.json';

class Image4 extends Component{

    constructor(props){
        super(props);

        this.state={

            images:imageData,
            currentIndex:0,
            maxIndex:imageData.length-1,

        };

    };

    componentDidMount(){
        // console.log("component Did Mount");
       
        setInterval(()=>{

            this.sliderTimer();
            
        },this.props.interval)
    }

    sliderTimer(){
        let newIndex=this.state.currentIndex;
        if(newIndex<=this.state.maxIndex){
            newIndex++;
        }
        if(newIndex>this.state.maxIndex){
            newIndex=0;
        }


        this.setState({currentIndex:newIndex})
    }

    render(){
        return(
            <div className='slider4'>

                <h3>{this.state.images[this.state.currentIndex].name}</h3>

                <div>
                    <img
                        src={this.state.images[this.state.currentIndex].src}
                        alt={this.state.images[this.state.currentIndex].alt}
                    />
                </div>

            </div>
        );
    };
}

export default Image4;