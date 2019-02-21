import React, {Component} from 'react';
import imageData from './../../slider.json';

class Image3 extends Component{

    constructor(){
        super();

        this.state={

            images:imageData,
            currentIndex:0,
            maxIndex:imageData.length,

        };

        this.sliderHandler=this.sliderHandler.bind(this);


    };

    sliderHandler(e){

        let newIndex=this.state.currentIndex;

        if(e.currentTarget.dataset.attr==='next'){

            newIndex = this.stepNext(newIndex);
        }
        else if(e.currentTarget.dataset.attr==='prev'){

            newIndex = this.stepPrev(newIndex);

        }

        this.setState({currentIndex:newIndex});

    }

    stepPrev(newIndex) {
        if (newIndex > 0) {
            newIndex = this.state.currentIndex - 1;
        }
        else {
            newIndex = this.state.maxIndex - 1;
        }
        return newIndex;
    }

    stepNext(newIndex) {
        if (newIndex < this.state.maxIndex - 1) {
            newIndex = this.state.currentIndex + 1;
        }
        else {
            newIndex = 0;
        }
        return newIndex;
    }

    render(){
        return(
            <div className='slider3'>

            <h3>{this.state.images[this.state.currentIndex].name}</h3>

            <div>
                <img 
                    src={this.state.images[this.state.currentIndex].src}
                    alt={this.state.images[this.state.currentIndex].alt}
                />
            </div>

            <div>
                <button data-attr='prev' onClick={this.sliderHandler.bind(this)}> Prev</button>

                <button data-attr='next' onClick={this.sliderHandler.bind(this)}>Next</button>

            </div>


            </div>
        );
    };
    

}

export default Image3;