import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//img
import trash from "/public/assets/img/icons/trashBlack.svg"
import confrim from "/public/assets/img/icons/tick-circle.svg"
import GrTrash from "/public/assets/img/icons/GrTrash.svg"


//context
import { CartContext } from '../contexts/CartContextProvider';

//functions
import { quantityCount } from '../../helper/function';
import { useState } from 'react';
import RemoveAll from './RemoveAll';

//context

const CartBoxConfrim = ({path , action}) => {
    const {state , dispatch} = useContext(CartContext);
    const {itemsCounter , total , selectedItems} = state;
    const [showClearModal , setShowClearModal] = useState(false);
    return (
        <div className='flex flex-col rounded-lg border border-[#CBCBCB] w-[82vw] 
                        pb-3 m-[0_auto] md:w-[496px] md:h-[490px] md:p-6 sm:gap-2'>
            <div className='flex p-2 border-b border-[#CBCBCB] justify-between items-center mb-3'>
                <span>سبد خرید({itemsCounter})</span>
                <img className='cursor-pointer' onClick={() => setShowClearModal(true)} src={trash} alt="delete" />
            </div>
            <div className=' overflow-y-scroll h-[50px] md:h-[162px]'>
                {
                    selectedItems.map(
                        (item , index) =>
                            <Food key={index} foodData={item}/>
                    )
                }
            </div>
            <div className='flex flex-col text-sm sm:m-[12px_0]'>
                <div className='flex justify-between items-center border-t border-[#CBCBCB] p-[12px_0]'>
                    <span>تخفیف محصولات</span>
                    <span>0 تومان</span>
                </div>
                <div className='flex justify-between items-center border-t border-[#CBCBCB] p-[12px_0]'>
                    <span>هزینه ارسال</span>
                    <span>25000تومان</span>
                </div>
                <div className='flex justify-between items-center border-t border-[#CBCBCB] p-[12px_0]'>    
                    <span>مبلغ قابل پرداخت</span>
                    <span className='text-bg-primary'>{total}تومان</span>
                </div>
                <Link
                    onClick={action == "checkout" ? 
                                () => dispatch({type:"CHECKOUT" }) 
                                : ""}
                    to={path} 
                    className='md:h-10 h-8 font-medium text-xs sm:text-base bg-green-primary rounded 
                                flex justify-center items-center text-white'>
                    <img className='w-4 sm:w-auto m-2' src={confrim} alt="confrim" />
                    ثبت سفارش
                </Link>
            </div>
            <RemoveAll isVisible={showClearModal} onClose={() => setShowClearModal(false)}/>
        </div>
    );
};

const Food = ({foodData}) => {

    const {name , price , id } = foodData;
    const {state , dispatch} = useContext(CartContext);

    return(
        <div className={`${id%2 == 0 ? "bg-[#EDEDED]" : "bg-[#F9F9F9]"} flex items-center justify-between sm:h-[54px]`}>
            <div className='flex flex-col'>
                <span>{name}</span>
                <span className='text-xs text-[#717171]'>{price} تومان</span>
            </div>
            <div>
                {
                    <div className='h-8 w-12 flex items-center justify-between border border-[#E5F2E9] bg-[#E5F2E9] rounded sm:gap-2'>
                        <button className='flex items-center duration-75 sm:h-5 sm:w-6 max-w-[50px]
                                         text-bg-primary text-[15px] md:text-base' 
                                onClick={() => dispatch({type:"INCREASE" , payload : foodData})}>+</button>
                        <span className='text-bg-primary duration-75'>{quantityCount(state , id)}</span>
                        {
                            quantityCount(state , id) > 1 ?
                                <button
                                    className='flex items-center sm:h-5 sm:w-5 max-w-[40px]
                                    text-bg-primary text-[15px] md:text-base'
                                    onClick={() => dispatch({type:"DECREASE" , payload : foodData})}>-</button>
                                :
                                <button
                                    className="duration-75"
                                    onClick={() => dispatch({type:"REMOVE_ITEM" , payload : foodData})}><img className='md:w-32 w-4' src={GrTrash} alt="trashIcon" /></button>
                        }
                    </div>
                }
            </div>
        </div>
    )
}
export default CartBoxConfrim;