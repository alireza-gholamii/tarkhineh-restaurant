import React , { useState } from 'react';

//img
import cart from "/public/assets/img/icons/cart.svg"
import grUserData from "/public/assets/img/icons/grUserData.svg"
import wallet from "/public/assets/img/icons/wallet.svg"
import CartBoxConfrim from './CartBoxConfrim';
import right from '/public/assets/img/icons/arrow-right-black.svg'
import Delivery from './Delivery';
import AddressBox from './AddressBox';

const ConfrimData = () => {

    const [delivery , setDelivery] = useState("");

    return (
        <div className='md:h-[100vh] m-[0_auto] flex flex-col sm:items-start'>
            <div className='hidden m-[30px_auto] md:flex gap-1 justify-between items-center'>
                <div className='flex'>
                    <img src={cart} alt="cart" />
                    <span className='text-bg-primary'>سبد خرید</span>
                </div>
                <span className='text-xs text-bg-primary font-bold'>----------------------</span>
                <div className='flex'>
                    <img src={grUserData} alt="confrim" />
                    <span className='flex items-center font-bold text-xs text-bg-primary'>تکمیل اطلاعات</span>
                </div>
                <span className='text-xs text-bg-primary font-bold'>----------------------</span>
                <div className='flex'>
                    <img src={wallet} alt="checkOut" />
                    <span className='text-[#CBCBCB]'>پرداخت</span>
                </div>
            </div>
            {/* top bar */}
            <div className='md:hidden flex justify-around items-center m-[20px_0]'>
                <img src={right} alt="" />
                <span className='font-bold'>تکمیل اطلاعات</span>
                <div></div>
            </div>
            <div className='flex flex-col items-start md:flex-row gap-1 sm:gap-6 m-[0_auto]'>
                <div className='h-full flex flex-col md:items-start gap-3 md:gap-6 md:m-auto m-[0_auto] md:w-[704px]'>
                    <Delivery setDelivery={setDelivery} delivery={delivery} />
                    <AddressBox />
                    <div></div>
                </div>
                <div>
                    <CartBoxConfrim path="/cart/payment" />
                </div>
            </div>
        </div>
    )
};


export default ConfrimData;