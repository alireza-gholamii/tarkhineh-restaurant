import React from 'react';
import DiscountCode from './DiscountCode';

//img
import cart from "/assets/img/icons/cart.svg"
import grUserData from "/assets/img/icons/grUserData.svg"
import grwallet from "/assets/img/icons/grWallet.svg"
import right from '/assets/img/icons/arrow-right-black.svg'
import { useState } from 'react';
import CartBoxConfrim from './CartBoxConfrim';
import PayingMethod from './PayingMethod';

const Paymant = () => {
    
    
    return (
        <div className='h-[75vh] min-h-[600px] m:h-[100vh] m-[0_auto] flex flex-col sm:items-start'>
            {/* top bar */}
            <div className='hidden m-[30px_auto] md:flex gap-1 justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <img src={cart} alt="cart" />
                    <span className='text-[#417F56]'>سبد خرید</span>
                </div>
                <span className='text-[#417F56]'>----------------------</span>
                <div className='flex items-center gap-1'>
                    <img className='w-6' src={grUserData} alt="confrim" />
                    <span className='flex items-center text-[#417F56]'>تکمیل اطلاعات</span>
                </div>
                <span className='text-xs text-bg-primary font-bold'>----------------------</span>
                <div className='flex items-center gap-1'>
                    <img src={grwallet} alt="checkOut" />
                    <span className='text-bg-primary text-base font-bold'>پرداخت</span>
                </div>
            </div>
            {/* top bar */}
            <div className='md:hidden flex justify-around items-center m-[20px_0]'>
                <img src={right} alt="" />
                <span className='font-bold'>پرداخت</span>
                <div></div>
            </div>

            {/* middle bar */}

            <div className='flex h-[65vh] flex-col sm:flex-row justify-between sm:gap-6 m-[0_auto]'>
                <div className='h-full flex flex-col md:items-start gap-3 md:gap-6 m-[0_auto]'>
                    <DiscountCode />
                    <PayingMethod />
                </div>
                <CartBoxConfrim path="/" action="checkout"  />
            </div>

        </div>
    );
};

export default Paymant;