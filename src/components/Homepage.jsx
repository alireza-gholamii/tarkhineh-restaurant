import React from 'react';
import Navbar from './shared/Navbar';
import Slider from './home/Slider';
import Foods from './home/Foods';
import About from './home/About';

const Homepage = () => {
    return (
        <div className='max-w-[1700px] m-[0_auto]'> 
            <Navbar />
            <Slider />
            <Foods/>
            <About />
        </div>
    );
};

export default Homepage;