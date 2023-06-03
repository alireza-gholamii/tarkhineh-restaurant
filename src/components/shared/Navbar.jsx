import React from 'react';

//styles
import styles from "./Navbar.module.css"

//picure
import logo from "../../img/icons/logo.svg"
import hamburgerMenu from "../../img/icons/menu.svg"
import arrowDown from "../../img/icons/arrow-down.svg"
import search from "../../img/icons/search.svg"
import shop from "../../img/icons/shop.svg"
import user from "../../img/icons/user.svg"

const Navbar = () => {
    return (
        <>
           <div className={`flex justify-between p-6 ${styles.fontEstedad}`}>
                
                <div className="order-first md:order-2 flex">
                    
                    <img src={hamburgerMenu}
                        className='md:hidden block w-6'/>
                    
                    <ul className='hidden md:flex'>
                        <li className='m-2'><a href='#'>صفحه اصلی</a></li>
                        <li className='m-2'>
                            <div className='flex'>
                                <span>شعبه</span>
                                <img src={arrowDown}/>
                                <div>
                                    
                                </div>
                            </div>
                        </li>
                        <li className='m-2'>
                            <div className='flex'>
                                <span>منو</span>
                                <img src={arrowDown}/>
                                <div>

                                </div>
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
                    <img className='m-1 hidden md:block' src={search}/>
                    <img className='m-1 w-5 md:w-auto' src={shop}/>
                    <img className='m-1 w-5 md:w-auto' src={user}/>
                </div>
            </div> 
        </>
    );
};

export default Navbar;