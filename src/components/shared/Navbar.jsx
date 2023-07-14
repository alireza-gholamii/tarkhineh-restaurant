import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

//context
import {CartContext} from "../contexts/CartContextProvider";

//picure
import logo from "/public/assets/img/icons/logo.svg"
import hamburgerMenu from "/public/assets/img/icons/menu.svg"
import arrowDown from "/public/assets/img/icons/arrow-down.svg"
import arrowDownGR from "/public/assets/img/icons/arrow-down-green.svg"
import search from "/public/assets/img/icons/search.svg"
import shop from "/public/assets/img/icons/shop.svg"
import user from "/public/assets/img/icons/user.svg"
import Search from '../home/SearchModal';
const Navbar = () => {

    const params = useParams();

    const {state , dispatch} = useContext(CartContext)

    const [showSearchModal , setShowSearchModal] = useState(false);
    return (
        <>
           <div className='flex justify-between p-3 sm:p-6 sm:h-[90px] h-[50px]'>
                
                <div className="order-first md:order-2 flex">
                    
                    <img src={hamburgerMenu}
                        className='md:hidden block w-6'/>
                    
                    <ul className='hidden md:flex'>
                        <li className='flex flex-col m-2'>
                            <a
                                className={params.name == undefined ? "text-[#417f56] font-bold leading-7" : "text-black"}
                                href='#'>صفحه اصلی</a>
                        </li>
                        <li className='group relative flex flex-col m-2'>
                            <a
                                href='#'
                                className='flex'>
                                <span className={params.name !== undefined ? "font-bold leading-7 text-[#417f56]" :""}>شعبه {params.name}</span>
                                <img src={params.name !== undefined ? arrowDownGR : arrowDown}/>
                            </a>
                            <div className='absolute top-6 left-[5px] duration-500 hidden group-hover:flex flex-col w-36 bg-white divide-y divide-solid z-50'>
                                <Link to="/branch/اکباتان" className='h-10 flex items-center p-2 cursor-pointer'>اکباتان</Link>
                                <Link to="/branch/چالوس" className='h-10 flex items-center p-2 cursor-pointer'>چالوس</Link>
                                <Link to="/branch/اقدسیه" className='h-10 flex items-center p-2 cursor-pointer'>اقدسیه</Link>
                                <Link to="/branch/ونک" className='h-10 flex items-center p-2 cursor-pointer'>ونک</Link>
                            </div>
                        </li>
                        <li className='group cursor-pointer relative m-2'>
                            <a className='flex'
                            >
                                <span>منو</span>
                                <img src={arrowDown}/>
                            </a>
                            <div className='absolute z-1 top-6 duration-500 hidden group-hover:flex flex-col w-36 bg-white divide-y divide-solid z-50'>
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
                        className='cursor-pointer w-5 md:h-10 md:w-10 m-1 hidden md:block' src={search}/>
                    <div className='m-1 h-10 relative'>
                        <img className='cursor-pointer w-5 md:w-10' src={shop}/>
                        <span className='absolute top-[0px] text-[10px] w-3 justify-center flex items-center rounded-[50%] bg-[#61AE7B] text-white'>{state.itemsCounter}</span>
                    </div>
                    <img className='cursor-pointer m-1 w-5 md:h-10 md:w-10' src={user}/>
                </div>
            </div>
            <Search isVisible={showSearchModal} onClose={() => setShowSearchModal(false)}/>
        </>
    );
};

export default Navbar;