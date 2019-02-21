import React, {Component} from 'react';
import  imageData from './../../slider.json'; 

class Image2 extends Component{

    constructor(){
        super();

        this.state={

            images:imageData,
            currentIndex:0,
            maxIndex:imageData.length,
            youCanGoPrev:false,
            youCanGoNext:true
        }

        this.nextSliderHandler=this.nextSliderHandler.bind(this);
    }

    nextSliderHandler(e){

        let newIndex=this.state.currentIndex;
        if(e.currentTarget.dataset.attr==='next'){

            newIndex = this.makeNextStep(newIndex);

           
        }else{

            newIndex = this.marePrevStep(newIndex);

        }

        this.setState({currentIndex:newIndex})
    }


    marePrevStep(newIndex) {
        if (newIndex > 0) {
            newIndex = this.state.currentIndex - 1;
            this.setState({
                youCanGoNext: true
            });
        }
        if (newIndex === 0) {
            this.setState({
                youCanGoPrev: false
            });
        }
        return newIndex;
    }

    makeNextStep(newIndex) {
        if (newIndex < this.state.images.length - 1) {
            newIndex = this.state.currentIndex + 1;
            this.setState({
                youCanGoPrev: true
            });
        }
        if (newIndex === this.state.images.length - 1) {
            this.setState({
                youCanGoNext: false
            });
        }
        return newIndex;
    }

    render(){
        return(
            <div className="slider">
                
                <h3>{this.state.images[this.state.currentIndex].name}</h3>
                <div>
                    <img
                        src={this.state.images[this.state.currentIndex].src}
                        alt={this.state.images[this.state.currentIndex].alt}
                    />
                </div>
                <div>

                    <button disabled={!this.state.youCanGoPrev} data-attr='prev' onClick={this.nextSliderHandler.bind(this)}>prev</button>
                        {this.state.currentIndex}
                    <button disabled={!this.state.youCanGoNext}  data-attr='next' onClick={this.nextSliderHandler.bind(this)}>next</button>
                </div>

            </div>
        )
    }

}

export default Image2;