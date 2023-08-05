import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContextProvider';

//img
import Close from "/assets/img/icons/Closeicon.svg"

const RemoveAll = ({isVisible , onClose}) => {

    const {statee , dispatch} = useContext(CartContext);

    if(! isVisible) return null

    const closeHandler = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }

    return (
        <div
            id='wrapper'
            onClick={closeHandler}  
            className='fixed duration-500 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30 '>
            <div className='flex flex-col rounded-lg w-[90vw] h-[175px] sm:h-auto sm:w-[392px] sm:gap-8 gap-6 sm:pb-6 bg-white'>
                <div className='flex rounded-t-lg justify-around p-[10px_0] items-center h-[57px] sm:h-[66px] bg-[#F9F9F9]'>
                    <div></div>
                    <span className='text-xs sm:text-xl font-semibold'>حذف محصولات</span>
                    <img onClick={() => onClose()} src={Close} className='cursor-pointer w-4 sm:w-[26px]' alt="close" />
                </div>
                <span className='flex items-center sm:text-base text-[10px] whitespace-nowrap justify-center'>همه محصولات سبد خرید شما حذف شود؟</span>
                <div className='flex items-center m-[0_auto] justify-evenly gap-5'>
                    <Link onClick={() => onClose()} to="/cart" className='p-2 text-[10px] sm:text-base sm:p-[8px_16px] sm:h-10 text-bg-primary rounded border border-[#417F56]'>بازگشت</Link >
                    <Link onClick={()=>dispatch({type:"CLEAR"})} className='p-2 text-[10px] sm:text-base sm:p-[8px_20px] sm:h-10 text-[#C30000] rounded bg-[#FFF2F2]'>حذف</Link >
                </div>
            </div>
        </div>
    );
};

export default RemoveAll;