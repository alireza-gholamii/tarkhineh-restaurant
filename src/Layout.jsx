import React from 'react';

import { Outlet } from 'react-router-dom';

import Navbar from './components/shared/Navbar';
import Footer from './components/home/Footer';

const Layout = () => {
    return (
        <div className='max-w-[1700px] m-[0_auto]'>
            <header>
            <Navbar />
            </header>
            <Outlet />
            <footer>
            <Footer />
            </footer>
        </div>
    );
};

export default Layout;