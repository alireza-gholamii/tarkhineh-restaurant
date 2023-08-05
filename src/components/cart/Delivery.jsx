import React from 'react';

//img
import img1 from "/public/assets/img/icons/transfrelogo1.svg"
import img2 from "/public/assets/img/icons/transfrelogo2.svg"
import img3 from "/public/assets/img/icons/transfrelogo3.svg"

const Delivery = () => {
    return (
            <div className='border border-[#CBCBCB] rounded-lg md:p-[32px_20px] w-full 
                            h-[133px] justify-around flex flex-col md:flex-row md:gap-[65px]'>
                <div className='flex items-center gap-1 sm:border-none border-b-2 p-2 sm:p-0'>
                    <img className='w-4 md:w-6' src={img1} alt="transfer" />
                    <span className='text-xs md:text-base whitespace-nowrap'>روش تحویل سفارش</span>
                </div>
                <div className='flex gap-2 md:gap-10 text-[10px] md:text-sm flex-col md:flex-row'>
                    <div className='flex items-center pr-2'>
                        <input id='paik' type="radio" name="transfer"/>
                        <div className='flex'>
                            <div className='flex flex-col m-[0_8px]'>
                                <label htmlFor="paik">ارسال توسط پیک</label>
                                <span className='hidden md:block text-[10px]'>توسط پیک رستوران ارسال شود.</span>
                            </div>
                            <img className='w-4 sm:w-6' src={img2} alt="paik" />
                        </div>
                    </div>
                    <div className='flex items-center pr-2'>
                        <input id='hozori' type="radio" name="transfer"/>
                        <div className='flex'>
                            <div className='flex flex-col m-[0_8px]'>
                                <label htmlFor="hozori">تحویل حضوری</label>
                                <span className='hidden md:block text-[10px]'>توسط پیک رستوران ارسال شود.</span>
                            </div>
                            <img  className='w-4 sm:w-6' src={img3} alt="paik" />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Delivery;