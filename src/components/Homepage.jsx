import React from 'react';

//component
import Slider from './home/Slider';
import Foods from './home/Foods';
import About from './home/About';
import TarkhinehGardi from './home/TarkhinehGardi';

const Homepage = () => {
    return (
        <div className='max-w-[1700px] m-[0_auto]'> 
            <Slider />
            <Foods/>
            <About />
            <TarkhinehGardi />
        </div>
    );
};

export default Homepage;