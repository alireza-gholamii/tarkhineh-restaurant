import React, { useContext, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

//context
import {CartContext} from "../contexts/CartContextProvider";

//picure
import logo from "/public/assets/img/icons/fullLogo.svg"
import hamburgerMenu from "/public/assets/img/icons/menu.svg"
import arrowDown from "/public/assets/img/icons/arrow-down.svg"
import arrowDownGR from "/public/assets/img/icons/arrow-down-green.svg"
import search from "/public/assets/img/icons/search.svg"
import shop from "/public/assets/img/icons/shop.svg"
import user from "/public/assets/img/icons/user.svg"
import Search from '../home/SearchModal';
import Login from './Login';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {

    const params = useParams();

    const {state , dispatch} = useContext(CartContext)
    const [open , setOpen] = useState(false)
    const [showSearchModal , setShowSearchModal] = useState(false);
    const [showLoginModal , setShowLoginModal] = useState(false)
    return (
        <>
           <div className='w-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)]'>
                <div className='flex justify-between items-center p-3 sm:p-6 m-[0_auto] sm:h-[90px] h-[50px] w-[90%]'>
                    <div className="order-first md:order-2 flex">
                        
                        <img
                            onClick={()=> setOpen(true)}
                            src={hamburgerMenu}
                            className='md:hidden block w-6'/>
                        
                        <ul className='hidden md:flex'>
                            <li className='flex flex-col m-2'>
                                <NavLink
                                    className={params.name !== undefined ? "text-black" : "text-bg-primary font-bold leading-7"}
                                    to='/'>صفحه اصلی</NavLink>
                            </li>
                            <li className='group relative flex flex-col m-2'>
                                <NavLink
                                    to='#'
                                    className='flex'>
                                    <span className={params.name !== undefined ? "font-bold leading-7 text-bg-primary" :""}>شعبه {params.name}</span>
                                    <img src={params.name !== undefined ? arrowDownGR : arrowDown}/>
                                </NavLink>
                                <div className='absolute top-6 left-[5px] duration-500 hidden group-hover:flex flex-col w-36 bg-white divide-y divide-solid z-50'>
                                    <Link to="/branch/اکباتان" className='h-10 flex items-center p-2 cursor-pointer'>اکباتان</Link>
                                    <Link to="/branch/چالوس" className='h-10 flex items-center p-2 cursor-pointer'>چالوس</Link>
                                    <Link to="/branch/اقدسیه" className='h-10 flex items-center p-2 cursor-pointer'>اقدسیه</Link>
                                    <Link to="/branch/ونک" className='h-10 flex items-center p-2 cursor-pointer'>ونک</Link>
                                </div>
                            </li>
                            <li className='group cursor-pointer relative m-2'>
                                <div className='flex'
                                >
                                    <span>منو</span>
                                    <img src={arrowDown}/>
                                </div>
                                <div className='absolute z-1 top-6 duration-500 hidden group-hover:flex flex-col w-36 bg-white divide-y divide-solid z-50'>
                                    <Link to="/menu/غذای اصلی" className='h-10 flex items-center p-2 cursor-pointer'>غذای اصلی</Link>
                                    <Link to="/menu/پیش غذا" className='h-10 flex items-center p-2 cursor-pointer'>پیش غذا</Link>
                                    <Link to="/menu/دسر" className='h-10 flex items-center p-2 cursor-pointer'>دسر</Link>
                                    <Link to="/menu/نوشیدنی" className='h-10 flex items-center p-2 cursor-pointer'>نوشیدنی</Link>
                                </div>    
                            </li>
                            <li className='m-2'>
                                <Link href='#'>اعطای نمایندگی</Link>
                            </li>
                            <li className='m-2'><Link href='#'>تماس باما</Link></li>
                        </ul>
                    </div>
                    <div className='order-2 w-12 sm:w-auto mt-1 md:mt-0 md:order-first'>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className='order-3 flex'>
                        <img
                            onClick={() => setShowSearchModal(true)}     
                            className='cursor-pointer w-5 md:h-10 md:w-10 m-1 hidden md:block' src={search}/>
                        <Link to="/cart" className='flex justify-center m-1 h-10 relative'>
                            <img className='cursor-pointer w-5 md:w-10' src={shop}/>
                            <span className={`
                                                ${!state.itemsCounter && "hidden"}
                                                absolute left-[80%] top-[50%] text-[10px] w-3 justify-center flex rounded-[50%] bg-[#61AE7B] text-white`}>{state.itemsCounter}</span>
                        </Link>
                        <img onClick={() => setShowLoginModal(true)} className='cursor-pointer m-1 w-5 md:h-10 md:w-10' src={user}/>
                    </div>
                </div>
            </div>
            <Search isVisible={showSearchModal} onClose={() => setShowSearchModal(false)}/>
            <Login isLoginVisible={showLoginModal} visibleClose={() => setShowLoginModal(false)} />
            <HamburgerMenu open={open} setOpen={setOpen}/>
        </>
    );
};

export default Navbar;