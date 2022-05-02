import React from 'react';
import './ChooseUs.css';
import image from '../../../images/why-me-bg.png';
import logo1 from '../../../images/choose/1.png';
import logo2 from '../../../images/choose/2.png';
import logo3 from '../../../images/choose/3.png';
import logo4 from '../../../images/choose/4.png';

const ChooseUs = () => {
  return (
    <div>
        <div className='choose-container'>
            <div className='img'>
                <img src={image} alt="" />
            </div>
            <div className='choose-content'>
                <h3>WHY YOU SHOULD CHOOSE US?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptas, possimus labore neque quaerat hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, minima!</p>
                <div className='choose-inner-container'>
                    <div className='choose-div'>
                        <img src={logo1} alt="" />
                        <h5>TRUSTED BY THOUSANDS</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem libero perspiciatis, dolore explicabo ipsum incidunt quasi. Maiores, ipsa molestiae.</p>
                    </div>
                    <div className='choose-div'>
                        <img src={logo2} alt="" />
                        <h5>BUYING GUIDE</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem libero perspiciatis, dolore explicabo ipsum incidunt quasi. Maiores, ipsa molestiae.</p>
                    </div>
                    <div className='choose-div'>
                        <img src={logo3} alt="" />
                        <h5>TGREAT SERVICE</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem libero perspiciatis, dolore explicabo ipsum incidunt quasi. Maiores, ipsa molestiae.</p>
                    </div>
                    <div className='choose-div'>
                        <img src={logo4} alt="" />
                        <h5>24/7 SUPPORT</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem libero perspiciatis, dolore explicabo ipsum incidunt quasi. Maiores, ipsa molestiae.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs;