import React from 'react';

//img
import loc from "/public/assets/img/icons/location.svg"
import plus from "/public/assets/img/icons/plus-circle.svg"
import edit from "/public/assets/img/icons/edit-2.svg"
import trash from "/public/assets/img/icons/trashBlack.svg"

const AddressBox = () => {
    
    return (
        <div className='w-[82vw] md:w-full border border-[#CBCBCB] rounded-lg h-[210px] md:p-[5px_20px]'>
            <div className='flex justify-between items-center p-[16px_0_8px_0] border-b border-[#CBCBCB]'>
                <div className='flex justify-center items-center'>
                    <img className='w-4 md:w-6' src={loc} alt="location" />
                    <span className='text-sm md:text-base'>آدرس‌ها</span>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-4 md:w-6' src={plus} alt="plus" />
                    <span className='text-xs md:text-base text-bg-primary'>افزودن آدرس</span>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between p-[6px_6px] sm:p-[12px_0]'>
                <Address />
            </div>
        </div>
    );
};

const Address = () => {
    return(
        <>
            <div className='flex flex-col justify-around md:justify-between border border-[#CBCBCB] rounded-lg bg-[#F9F9F9] md:w-80 h-[74px] md:h-[115px] sm:p-3 p-1 md:text-xs'>
                <div className='flex justify-between items-center'>
                    <span className='w-[75%] md:w-[220px] text-[10px] md:text-sm'>تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰</span>
                    <div className='flex'>
                        <img className='w-4 md:w-6' src={edit} alt="edit" />
                        <img className='w-4 md:w-6' src={trash} alt="delete" />
                    </div>
                </div>
                <div className='flex text-[#717171] text-[10px] sm:text-sm justify-between items-center'>
                    <span>محل کار</span>
                    <span>سردار وظیفه</span>
                    <span>۰۹۱۴۸۶۴۳۳۵۰</span>
                </div>
            </div>
        </>
    )
}

export default AddressBox;