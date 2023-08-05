import React, { useContext } from 'react';

import { isInCart, quantityCount } from '../../helper/function';
import { CartContext } from '../contexts/CartContextProvider';

//img
import trash from "/assets/img/icons/trash.svg"
import Rate from "/assets/img/icons/StarRate.svg"

const MenuFoodComponent = ({foodData}) => {

    const {id, image , name , title , price , offer , intrested , rateCount } = foodData;
    const {state , dispatch} = useContext(CartContext);

    return (
        <div className='flex m-[0_auto] h-[90px] md:h-[158px] md:w-[45vw] w-[100%] max-w-[600px] border border-[#CBCBCB] rounded md:rounded-lg'>
            <div>
                <img className='w-[100px] h-[90px] md:w-[169px] md:h-[158px]' src={image} alt="foodPicture" />
            </div>
            <div className='flex flex-col md:gap-y-[15px] items-center justify-around w-[60%] md:p-[4px_32px_4px_8px]'>
                <div className='flex flex-col gap-2 w-[95%]'>
                    <h5 className='md:font-semibold md:text-xl text-xs'>{name}</h5>
                    <div className='flex justify-between md:justify-between md:gap-[17px]'>
                        <span className='text-[10px] md:text-xs truncate w-[40%]'>{title}</span>
                        <div className='md:text-lg text-[10px]'>
                            <span>{price}تومان</span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between w-[90%] md:w-[26vw] max-w-[338px]'>
                    <div className='flex items-start'>
                        <img className='md:w-6 w-2' src={Rate} alt="rate" />
                        <img className='md:w-6 w-2' src={Rate} alt="rate" />
                        <img className='md:w-6 w-2' src={Rate} alt="rate" />
                        <img className='md:w-6 w-2' src={Rate} alt="rate" />
                        <img className='md:w-6 w-2' src={Rate} alt="rate" />
                    </div>
                    <div className="flex items-center justify-around bg-[#E5F2E9] rounded-lg p-[auto_4px] whitespace-nowrap duration-75 h-6 sm:h-10 w-[55px] sm:w-[55px]">
                        {
                            isInCart(state , id) ? 
                                <>
                                    <button className='h-4 duration-75 sm:h-5 w-4 sm:w-5 max-w-[40px] text-bg-primary
                                            rounded bg-[#E5F2E9] flex items-center justify-center text-[15px] md:text-base' 
                                            onClick={() => dispatch({type:"INCREASE" , payload : foodData})}>+</button>
                                    <span className='duration-75 sm:text-base text-bg-primary text-xs'>{quantityCount(state , id)}</span>
                                    {
                                        quantityCount(state , id) > 1 ?
                                            <button 
                                                className='h-4 sm:h-5 w-4 sm:w-5 max-w-[40px] text-bg-primary
                                                rounded bg-[#E5F2E9] flex items-center justify-center text-[15px] md:text-2xl'
                                                onClick={() => dispatch({type:"DECREASE" , payload : foodData})}>-</button>
                                            :
                                            <button
                                                className="duration-75"
                                                onClick={() => dispatch({type:"REMOVE_ITEM" , payload : foodData})}><img src={trash} alt="trashIcon" /></button>
                                    }
                                    
                                </>
                                :
                                <button 
                                onClick={() => dispatch({type:"ADD_ITEM" , payload : foodData})}
                                        className='h-7 p-1 sm:p-3 flex items-center sm:h-5 md:h-10 w-[83px] sm:w-[15vw] max-w-[224px] text-white
                                            rounded bg-green-primary text-[8px] md:text-base'>افزودن به سبد خرید</button>
                                
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuFoodComponent;