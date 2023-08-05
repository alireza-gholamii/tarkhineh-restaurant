import React from 'react';

//images
import about from "/assets/img/about.svg"
import arrowLeft from "/assets/img/icons/arrow-left.svg"
import diagram from "/assets/img/icons/diagram.svg"
import homeWifi from "/assets/img/icons/home-wifi.svg"
import menuBoard from "/assets/img/icons/menu-board.svg"
import userSvg from "/public/assets/img/icons/userSvg.svg"
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div
            className='flex sm:flex-row flex-col text-white h-[360px] sm:h-[390px]' 
            style={{background : `url(${about})`}}>
            <div className='relative mt-12 flex flex-col '>
                <h4 className='sm:text-2xl sm:font-bold mb-6 mr-[6vw]'>رستوران‌های زنجیره‌ای ترخینه</h4>
                <p className='sm:w-[70%] sm:leading-9 leading-4 w-[88%] mr-[5vw] sm:text-xl text-[10px] text-justify'>
                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                </p>
                <div className='flex justify-end sm:w-[78%] w-[88%] mt-2'>
                     <Link className='border-solid border-[1px] w-[154px] sm:w-[184] h-[32px] sm:h-[40px] flex row gap-2 justify-center items-center border-white rounded ' href='#'>اطلاعات بیشتر<img className='sm:w-[24px] w-[16px]' src={arrowLeft}/></Link>
                </div>
            </div>
            <div>
                <div className='flex sm:items-center mt-[3vh] gap-5 flex-col sm:gap-2 sm:m-14'>
                    <div className='flex flex-row'>
                        <div className='flex flex-col w-44 justify-center items-center sm:m-[16px_6px]'>
                            <img className='w-6 sm:w-12 mb-1 sm:mb-4' src={userSvg} alt="fitchur" />
                            <span className='text-xs'>پرسنلی مجرب و حرفه‌ای</span>      
                        </div>
                        <div className='flex flex-col w-44 justify-center items-center sm:m-[16px_6px]'>
                            <img className='w-6 sm:w-12 mb-1 sm:mb-4' src={diagram} alt="fitchur" />
                            <span className='text-xs'>کیفیت بالای غذاها</span>      
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col w-44 justify-center items-center sm:m-[16px_6px]'>
                            <img className='w-6 sm:w-12 mb-1 sm:mb-4' src={homeWifi} alt="fitchur" />
                            <span className='text-xs'>محیطی دلنشین و آرام</span>      
                        </div>
                        <div className='flex flex-col w-44 justify-center items-center sm:m-[16px_6px]'>
                            <img className='w-6 sm:w-12 mb-1 sm:mb-4' src={menuBoard} alt="fitchur" />
                            <span className='text-xs'>منوی متنوع</span>      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;