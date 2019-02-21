import React from 'react';
import './Slider.css'
import Image2 from '../img/Image2';
import Image3 from '../img/Image3';
import Image4 from '../img/Images4';
import Image5 from '../img/Image5';



const Slider=()=>{
    return(

        <div className='slider'>

            <div className='sliderBlock'>

                <Image2/>

            </div>

            <div className='sliderBlock'>

                <Image3/>

            </div>

             <div className='sliderBlock'>

                <Image4 interval='4000'/>
                <Image4 interval='1000'/>


            </div>

            <div className='sliderBlock'>
                
                <Image5/>

            </div>







        </div>



    );
}

export default Slider;

