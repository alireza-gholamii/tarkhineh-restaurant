import React, { useContext, useEffect } from 'react';

//img
import trash from "/public/assets/img/icons/trashBlack.svg";
import warning from "/public/assets/img/icons/warning.svg"
import leftArrow from "/public/assets/img/icons/left Arrow.svg";
import { CartContext } from '../contexts/CartContextProvider';
import { Link } from 'react-router-dom';

const CartBox = ({setShowClearModal , itemsCounter , total}) => {

    useEffect(
        () => {
            dispatch({type:"MOUNTING"})
        }
        ,[]
    )

    const {state , dispatch} = useContext(CartContext);

    return (
        <div className='flex rounded-lg border border-[#CBCBCB] h-[80vh] sm:h-[323px] w-[80vw] md:w-[32vw] max-w-[496px] flex-col justify-around md:justify-between p-3 md:p-6'>
            <div className='hidden md:flex justify-between border-b border-[#CBCBCB]'>
                <span>سبد خرید({itemsCounter})</span>
                <img onClick={() => setShowClearModal(true)} className='cursor-pointer' src={trash} alt="trash" />
            </div>
            <div className='flex text-[10px] md:text-base justify-between whitespace-nowrap border-b border-[#CBCBCB]'>
                <span className=''>تخفیف محصولات</span>
                <span className='text-[#717171]'>0 تومان </span>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex text-[10px] md:text-base justify-between whitespace-nowrap'>    
                    <span>هزینه ارسال</span>
                    <span className='text-[#717171]'>0 تومان</span>
                </div>
                <div className='flex gap-2 items-start sm:text-xs text-[8px] text-[#A9791C]'>
                    <img className='w-4 sm:w-auto' src={warning} alt="warning" />
                    <span>هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</span>
                </div>
            </div>
            <div className='w-full h-[1px] bg-[#CBCBCB]'></div>
            <div className='flex justify-between sm:text-base text-[10px]'>
                <span>مبلغ قابل پرداخت</span>
                <span className='text-bg-primary text-xs md:text-base'>{total}تومان</span>
            </div>
            <Link
                to="/cart/ConfrimData"
                className='flex justify-center gap-2 items-center h-8 sm:h-10 bg-green-primary text-white sm:w-full rounded '>
                    <span className='text-xs'>تکمیل اطلاعات</span>
                    <img className='w-4 sm:w-6' src={leftArrow} alt="login" />
            </Link>
        </div>
    );
};

export default CartBox;