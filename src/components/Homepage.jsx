import React from 'react';
import Navbar from './shared/Navbar';
import Slider from './home/Slider';
import Foods from './home/Foods';
import About from './home/About';
import TarkhinehGardi from './home/TarkhinehGardi';
import Footer from './home/Footer';

const Homepage = () => {
    return (
        <div className='max-w-[1700px] m-[0_auto]'> 
            <Navbar />
            <Slider />
            <Foods/>
            <About />
            <TarkhinehGardi />
            <Footer />
        </div>
    );
};

export default Homepage;