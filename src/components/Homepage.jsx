import React, { useContext, useEffect } from 'react';

//component
import Slider from './home/Slider';
import Foods from './shared/Foods';
import About from './home/About';
import TarkhinehGardi from './home/TarkhinehGardi';
import { CartContext } from './contexts/CartContextProvider';
import HamburgerMenu from './shared/HamburgerMenu';

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