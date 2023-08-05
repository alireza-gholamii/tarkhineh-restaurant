import React from 'react';

import discount from '/assets/img/icons/discount-shape.svg'
import { useState } from 'react';


    const DiscountCode = () => {
        
        const [discountValue , setDiscount] = useState("")

        return (
            <div className='p-4 gap-2 border border-[#CBCBCB] rounded-lg md:p-6 sm:w-full w-[82vw] 
                        h-[90px] justify-around flex flex-col md:flex-row md:gap-[41px]'
                            >
                
                <div className='flex items-center gap-1 sm:border-none border-b-2 p-2 sm:p-0'>
                    <img className='w-4 md:w-6' src={discount} alt="transfer" />
                    <span className='text-xs md:text-base whitespace-nowrap'>ثبت کد تخفیف</span>
                </div>
                <div className='flex gap-4 sm:gap-[17px] items-center justify-around'>
                    <input 
                        value={discountValue} onChange={(e) => setDiscount(e.target.value)} 
                        className='sm:w-80 w-[60vw] h-[33px] sm:h-10 p-[12px_16px] border border-[#CBCBCB] rounded-md' 
                        type="text" 
                        placeholder='کد تخفیف' />
                    <button 
                        className={`${discountValue.length ? "bg-[#417F56]" : "bg-[#CBCBCB]"}
                                        sm:w-[94px] w-[51px] h-8 sm:h-10 sm:p-[8px_16px] rounded text-[#EDEDED]`}
                                >
                                ثبت کد
                            </button>
                </div>
        </div>
    );
};

export default DiscountCode;