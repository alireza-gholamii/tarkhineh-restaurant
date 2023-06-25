import React from 'react';

//image 
import footer from "../../img/footer.svg"
import telegram from "../../img/icons/telegram.svg"
import instagram from "../../img/icons/instagram.svg"
import twitter from "../../img/icons/twitter.svg"

const Footer = () => {
    return (
        <div 
            style={{background : `url(${footer})`}}
            className='flex justify-around h-[319px]'
            >
                
            <div
                className='flex flex-col justify-center gap-[16px] fontEstedad text-white ' 
                >
                <h5 className='sm:text-xl text-xs sm:font-bold'>دسترسی آسان</h5>
                <ul className='flex flex-col gap-[16px]'>
                    <li><a href="#"> پرسش‌های متداول</a></li>
                    <li><a href="#"> قوانین ترخینه</a></li>
                    <li><a href="#"> حریم خصوصی</a></li>
                    <li className='flex justify-between'>
                        <a href="#"><img src={telegram} alt="telegram" /></a>
                        <a href="#"><img src={instagram} alt="instagram" /></a>
                        <a href="#"><img src={twitter} alt="twitter" /></a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col justify-center gap-[16px] items-start fontEstedad text-white'>
                <h5 className='sm:text-xl text-xs sm:font-bold'>شعبه های ترخینه</h5>
                <ul className='flex flex-col gap-[16px]'>
                    <li><a href="#"> شعبه اکباتان</a></li>
                    <li><a href="#"> شعبه چالوس</a></li>
                    <li><a href="#"> شعبه اقدسیه</a></li>
                    <li><a href="#"> شعبه ونک</a></li>
                </ul>
            </div>
            <div className='relative flex gap-[16px] flex-col justify-center fontEstedad text-white'>
                <h5 className='hidden sm:flex text-xl font-bold'>پیام به ترخینه</h5>
                <div className='hidden sm:flex'>
                    <div className='flex flex-col ml-[26px]'>
                        <input className='bg-transparent h-[40px] mb-[12px] rounded border-[#717171] border-[1px]' placeholder='نام و نام خانوادگی'/>
                        <input className='bg-transparent h-[40px] mb-[12px] rounded border-[#717171] border-[1px]' placeholder='شماره تماس'/>
                        <input className='bg-transparent h-[40px] mb-[12px] rounded border-[#717171] border-[1px]' placeholder='ایمیل (اختیاری)'/>
                    </div>
                    <textarea cols="30" maxLength="200" className='flex items-start h-[144px] rounded border-[#717171] border-[1px] bg-transparent' placeholder='پیام شما'/>    
                </div>
                <button className='absolute hidden sm:flex justify-center top-[80%] right-[62%] border w-[183px] rounded border-[#717171] p-[8px_0px]' >ارسال پیام</button>
            </div>
        </div>
    );
};

export default Footer;