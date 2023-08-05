import React , { useRef } from 'react'
import { Link } from 'react-router-dom';

//img
import logo from "/assets/img/icons/HamburgerLogo.svg"
import close from "/assets/img/icons/Closeicon.svg"
import home from "/assets/img/icons/homeIcon.svg"
import menu from "/assets/img/icons/menu-board-logo.svg"
import brlogo from "/assets/img/icons/home-hashtag.svg"
import about from "/assets/img/icons/user-logo.svg"
import call from "/assets/img/icons/call-icon.svg"
import arrow from "/assets/img/icons/arrow-down.svg"
import topfram from "/assets/img/top-frame.jpg"

const HamburgerMenu = ({open , setOpen}) => {

    if(!open) return null

    const branchRef = useRef(null)
    const menuRef = useRef(null)
    
    const dropDownMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }

    const dropDownBranch = () => {
        branchRef.current.classList.toggle("hidden")
    }

    const outSideClick = (e) => {
        if (e.target.id == "outSide") setOpen(false)
    }

    return (
        <div
            onClick={e => outSideClick(e)}
            id='outSide'
            className='bg-[rgba(0,0,0,0.6)] duration-500 w-full h-full bottom-0 top-0 fixed z-20'>
            <div 
                className='flex flex-col fle-col h-full duration-500 w-[75%] bg-white z-30'>
                
                <div
                    style={{background: `url(${topfram})` ,backgroundSize:"cover"}}
                    className='p-4 h-24 flex items-start justify-between'>
                    <div className=''>
                        <img
                            src={logo} 
                            alt="logo" />
                    </div>
                    <div
                        onClick={()=>setOpen(false)} 
                        className='w-6'>
                        <img
                            src={close} 
                            alt="close" />
                    </div>
                </div>

                <div
                     
                    className='p-[16px_10px] divide-y divide-solid'>
                    <div
                        className='flex gap-1 p-[5px_10px]'>
                        <img 
                            src={home}
                            alt="home" />
                        <Link className='text-bg-primary' to="/">
                            صفحه اصلی
                        </Link>
                    </div>
                    <div>
                        <div
                            onClick={dropDownMenu} 
                            className='flex justify-between'>
                            <div 
                                className='flex gap-1 p-[5px_10px]'>
                                <img 
                                    src={menu}
                                    alt="menu" />
                                <span>منو</span>
                            </div>
                            <img
                                src={arrow} alt="arrow" />
                        </div>
                        <div 
                            ref={menuRef}
                            className='pr-4 duration-500 hidden flex-col bg-white'>
                                        <Link
                                            onClick={()=>setOpen(false)}
                                            to="/menu/غذای اصلی" 
                                            className='h-10 flex items-center p-2 cursor-pointer'>غذای اصلی</Link>
                                        <Link
                                            onClick={()=>setOpen(false)} 
                                            to="/menu/پیش غذا" 
                                            className='h-10 flex items-center p-2 cursor-pointer'>پیش غذا</Link>
                                        <Link
                                            onClick={()=>setOpen(false)} 
                                            to="/menu/دسر" 
                                            className='h-10 flex items-center p-2 cursor-pointer'>دسر</Link>
                                        <Link
                                            onClick={()=>setOpen(false)} 
                                            to="/menu/نوشیدنی" 
                                            className='h-10 flex items-center p-2 cursor-pointer'>نوشیدنی</Link>                     
                        </div>
                    </div>
                    
                    <div
                            className=' m-2'
                        >
                        <div
                            onClick={dropDownBranch} 
                            className='flex justify-between'>
                            <div
                                to='#'
                                className='gap-1 flex p-[5px_0]'>
                                <img
                                    src={brlogo} alt="" />
                                <span>شعبه</span>
                            </div>
                            <img
                                className=''
                                src={arrow} alt="arrow" />
                        </div>
                        
                        <div
                            ref={branchRef}
                            className='pr-4 duration-500 hidden flex-col w-full bg-white'>
                            <Link
                                onClick={()=>setOpen(false)} 
                                to="/branch/اکباتان" 
                                className='h-10 flex items-center p-2 cursor-pointer'>اکباتان</Link>
                            <Link
                                onClick={()=>setOpen(false)} 
                                to="/branch/چالوس" 
                                className='h-10 flex items-center p-2 cursor-pointer'>چالوس</Link>
                            <Link
                                onClick={()=>setOpen(false)} 
                                to="/branch/اقدسیه" 
                                className='h-10 flex items-center p-2 cursor-pointer'>اقدسیه</Link>
                            <Link
                                onClick={()=>setOpen(false)} 
                                to="/branch/ونک" 
                                className='h-10 flex items-center p-2 cursor-pointer'>ونک</Link>
                        </div>
                    </div>
                    
                    <div className='flex gap-1 p-[5px_10px]'>
                        <img 
                            src={about}
                            alt="aboutUs" />
                        <span>درباره ما</span>
                    </div>
                    
                    <div className='flex gap-1 p-[5px_10px]'>
                        <img 
                            src={call}
                            alt="contact" />
                        <span>تماس باما</span>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;