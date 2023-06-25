import React, { useState } from 'react';

//picure
import logo from "../../img/icons/logo.svg"
import hamburgerMenu from "../../img/icons/menu.svg"
import arrowDown from "../../img/icons/arrow-down.svg"
import search from "../../img/icons/search.svg"
import shop from "../../img/icons/shop.svg"
import user from "../../img/icons/user.svg"
import Search from '../home/SearchModal';

const Navbar = () => {

    const [showSearchModal , setShowSearchModal] = useState(false);
    return (
        <>
           <div className='flex justify-between p-6 m-[0_auto] fontEstedad h-[90px]'>
                
                <div className="order-first md:order-2 flex">
                    
                    <img src={hamburgerMenu}
                        className='md:hidden block w-6'/>
                    
                    <ul className='hidden md:flex'>
                        <li className='flex flex-col m-2'>
                            <a
                                className='text-[#417f56] font-bold leading-7 '
                                href='#'>صفحه اصلی</a>
                            <div className='w-[100%] h-[2px] bg-[#417f56]'></div>
                        </li>
                        <li className='group relative flex flex-col m-2'>
                            <a
                                href='#'
                                className='flex'>
                                <span>شعبه</span>
                                <img src={arrowDown}/>
                            </a>
                            <div className='absolute top-6 left-[5px] duration-500 hidden group-hover:flex flex-col w-36 bg-white divide-y divide-solid fontEstedad z-50'>
                                <span className='h-10 flex items-center p-2 cursor-pointer'>اکباتان</span>
                                <span className='h-10 flex items-center p-2 cursor-pointer'>چالوس</span>
                                <span className='h-10 flex items-center p-2 cursor-pointer'>اقدسیه</span>
                                <span className='h-10 flex items-center p-2 cursor-pointer'>ونک</span>
                            </div>
                        </li>
                        <li className='group cursor-pointer relative m-2'>
                            <a className='flex'
                            >
                                <span>منو</span>
                                <img src={arrowDown}/>
                            </a>
                            <div className='absolute z-1 top-6 duration-500 hidden group-hover:flex flex-col w-36 bg-white divide-y divide-solid fontEstedad z-50'>
                                <span className='h-10 flex items-center p-2 cursor-pointer'>غذای اصلی</span>
                                <span className='h-10 flex items-center p-2 cursor-pointer'>پیش غذا</span>
                                <span className='h-10 flex items-center p-2 cursor-pointer'>دسر</span>
                                <span className='h-10 flex items-center p-2 cursor-pointer'>نوشیدنی</span>
                            </div>       
                        </li>
                        <li className='m-2'>
                            <a href='#'>اعطای نمایندگی</a>
                        </li>
                        <li className='m-2'><a href='#'>تماس باما</a></li>
                    </ul>
                </div>
                <div className='order-2 w-12 sm:w-auto mt-1 md:mt-0 md:order-first'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='order-3 flex'>
                    <img
                        onClick={() => setShowSearchModal(true)}     
                        className='cursor-pointer m-1 hidden md:block' src={search}/>
                    <img className='cursor-pointer m-1 w-5 md:w-auto' src={shop}/>
                    <img className='cursor-pointer m-1 w-5 md:w-auto' src={user}/>
                </div>
            </div>
            <Search isVisible={showSearchModal} onClose={() => setShowSearchModal(false)}/>
        </>
    );
};

export default Navbar;