import React from 'react';

//images
import about from "../../img/about.svg"
import arrowLeft from "../../img/icons/arrow-left.svg"
import diagram from "../../img/icons/diagram.svg"
import homeWifi from "../../img/icons/home-wifi.svg"
import menuBoard from "../../img/icons/menu-board.svg"
import userSvg from "../../img/icons/userSvg.svg"

const About = () => {
    return (
        <div
            className='flex sm:flex-row flex-col text-white h-[360px] sm:h-[390px] fontEstedad' 
            style={{background : `url(${about})`}}>
            <div className='relative mt-12 flex flex-col '>
                <h4 className='sm:text-2xl sm:font-bold mb-6 mr-[6vw]'>رستوران‌های زنجیره‌ای ترخینه</h4>
                <p className='sm:w-[70%] sm:leading-9 leading-4 w-[88%] mr-[5vw] sm:text-xl text-[10px] text-justify'>
                مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
                </p>
                <div className='flex justify-center w-[105%]'>
                     <a className='border-solid border-[1px] w-[154px] sm:w-[184] h-[32px] sm:h-[40px] flex row gap-2 justify-center items-center border-white rounded ' href='#'>اطلاعات بیشتر<img className='sm:w-[24px] w-[16px]' src={arrowLeft}/></a>
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-2 m-14'>
                    <div className='flex flex-row gap-6'>
                        <div className='flex flex-col w-44 justify-center items-center p-[16px_12px]'>
                            <img className='w-12 mb-4' src={userSvg} alt="fitchur" />
                            <span>پرسنلی مجرب و حرفه‌ای</span>      
                        </div>
                        <div className='flex flex-col w-44 justify-center items-center p-[16px_12px]'>
                            <img className='w-12 mb-4' src={diagram} alt="fitchur" />
                            <span>کیفیت بالای غذاها</span>      
                        </div>
                    </div>
                    <div className='flex flex-row m-5'>
                        <div className='flex flex-col w-44 justify-center items-center p-[16px_12px]'>
                            <img className='w-12 mb-4' src={homeWifi} alt="fitchur" />
                            <span>محیطی دلنشین و آرام</span>      
                        </div>
                        <div className='flex flex-col w-44 justify-center items-center p-[16px_12px]'>
                            <img className='w-12 mb-4' src={menuBoard} alt="fitchur" />
                            <span>منوی متنوع</span>      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;