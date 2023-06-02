import React from 'react';

//styles
import styles from "./Navbar.module.css"

//picure
import logo from "../../img/logo.svg"
import arrowDown from "../../img/arrow-down.svg"
import search from "../../img/search.svg"
import shop from "../../img/shop.svg"
import user from "../../img/user.svg"

const Navbar = () => {
    return (
        <>
           <div className={`flex justify-between p-6 ${styles.fontEstedad}`}>
                <div>
                    <img src={logo} alt='logo'/>
                </div>
                <div >
                    <ul className='flex group'>
                        <li className='m-2'><a href='#'>صفحه اصلی</a></li>
                        <li className='m-2'>
                            <div className='flex group'>
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
                <div className='flex'>
                    <img className='m-1' src={search}/>
                    <img className='m-1' src={shop}/>
                    <img className='m-1' src={user}/>
                </div>
            </div> 
        </>
    );
};

export default Navbar;