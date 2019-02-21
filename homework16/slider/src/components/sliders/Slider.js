import React from 'react';
import './Slider.css'
import Image2 from '../img/Image2';
import Image3 from '../img/Image3';
import Image4 from '../img/Images4';
import Image5 from '../img/Image5';
import Image6 from '../img/Image5';




const Slider=()=>{
    return(

        <div className='slider'>

            <h2>Слайдер 1</h2>

            <div className='sliderBlock'>
        
                <Image2/>

            </div>

            <h2>Слайдер 2</h2>
            
            <div className='sliderBlock'>

                <Image3/>

            </div>

            <h2>Слайдер 3</h2>

             <div className='sliderBlock'>

                <Image4 interval='4000'/>


            </div>

            <h2>Слайдер 4</h2>

            <div className='sliderBlock'>

                <Image4 interval='1000'/>

            </div>


            <h2>Слайдер 5</h2>

            <div className='sliderBlock5'>
                
                <Image5 interval='2000'/>

            </div>

            <h2>Слайдер 6</h2>

            <div className='sliderBlock5'>
    
                <Image6 interval='4000'/>

            </div>

        </div>
    );
}

export default Slider;

