import React from 'react';

//image 
import footer from "/public/assets/img/footer.svg"
import telegram from "/assets/img/icons/telegram.svg"
import instagram from "/assets/img/icons/instagram.svg"
import twitter from "/assets/img/icons/twitter.svg"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div 
            style={{background : `url(${footer})`}}
            className='flex justify-around sm:h-[319px] p-8'
            >
                
            <div
                className='flex flex-col justify-center gap-[16px] text-white ' 
                >
                <h5 className='sm:text-xl text-[10px] sm:font-bold'>دسترسی آسان</h5>
                <ul className='flex flex-col text-[8px] sm:text-base gap-[16px]'>
                    <li><Link href="#"> پرسش‌های متداول</Link></li>
                    <li><Link href="#"> قوانین ترخینه</Link></li>
                    <li><Link href="#"> حریم خصوصی</Link></li>
                    <li className='flex justify-between'>
                        <Link className='w-4 sm:w-auto' href="#"><img src={telegram} alt="telegram" /></Link>
                        <Link className='w-4 sm:w-auto' href="#"><img src={instagram} alt="instagram" /></Link>
                        <Link className='w-4 sm:w-auto' href="#"><img src={twitter} alt="twitter" /></Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col justify-center gap-[16px] items-start text-white'>
                <h5 className='sm:text-xl text-[10px] sm:font-bold'>شعبه های ترخینه</h5>
                <ul className='flex flex-col text-[8px] sm:text-base gap-[16px]'>
                    <li><Link href="#"> شعبه اکباتان</Link></li>
                    <li><Link href="#"> شعبه چالوس</Link></li>
                    <li><Link href="#"> شعبه اقدسیه</Link></li>
                    <li><Link href="#"> شعبه ونک</Link></li>
                </ul>
            </div>
            <div className='relative flex gap-[16px] flex-col justify-center text-white'>
                <h5 className='hidden sm:flex text-xl font-bold'>پیام به ترخینه</h5>
                <div className='hidden sm:flex'>
                    <div className='flex flex-col ml-[26px]'>
                        <input className='bg-transparent h-[40px] mb-[12px] rounded border-[#717171] border-[1px]' placeholder='نام و نام خانوادگی'/>
                        <input className='bg-transparent h-[40px] mb-[12px] rounded border-[#717171] border-[1px]' placeholder='شماره تماس'/>
                        <input className='bg-transparent h-[40px] mb-[12px] rounded border-[#717171] border-[1px]' placeholder='ایمیل (اختیاری)'/>
                    </div>
                    <textarea cols="30" maxLength="200" className='flex items-start h-[130px] rounded border-[#717171] border-[1px] bg-transparent' placeholder='پیام شما'/>    
                </div>
                <button className='absolute hidden sm:flex justify-center top-[80%] right-[62%] border w-[183px] rounded border-[#717171] p-[8px_0px]' >ارسال پیام</button>
            </div>
        </div>
    );
};

export default Footer;