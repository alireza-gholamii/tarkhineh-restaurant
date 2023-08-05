import React, { useContext } from 'react';

//context
import { CartContext } from '../contexts/CartContextProvider';

//image
import trash from "/public/assets/img/icons/trashBlack.svg";
import GrTrash from "/public/assets/img/icons/GrTrash.svg"
import Rate from "/assets/img/icons/StarRate.svg";
import EmRate from "/assets/img/icons/emRate.svg";

//functions
import { quantityCount } from '../../helper/function';

const CartFoodComponent = ({foodData}) => {

    const {state , dispatch} = useContext(CartContext);

    const {id, image , name , title , price , offer , intrested , rateCount } = foodData;

    return (
        <div className='flex w-[100%] max-w-[656px] border-b md:border border-[#CBCBCB] md:rounded-lg '>
            <div className='hidden md:flex'>
                <img className='h-[158px] w-[169px]' src={image} alt="food" />
            </div>
            <div className='flex flex-col w-[80%] justify-around gap-2 p-2 md:p-[16px_32px]'>
                <div className='flex justify-between items-center md:text-xl text-xs md:font-semibold '>
                    <span>{name}</span>
                    <div className='hidden md:block cursor-pointer' onClick={() => dispatch({type:"REMOVE_ITEM" , payload:foodData})}>
                        <img src={trash} alt="trash" />
                    </div>
                </div>
                <div className='hidden md:flex justify-between items-center text-sm'>
                    <span>{title}</span>
                </div>
                <div className='flex items-center justify-between gap-[10vw] md:gap-0'>
                    <div className='flex sm:w-auto w-[26vw] items-center'>
                        <div className='hidden md:flex flex-row-reverse items-center justify-center'>
                            <img className='w-6' src={Rate} alt="rate" />
                            <img className='w-6' src={Rate} alt="rate" />
                            <img className='w-6' src={Rate} alt="rate" />
                            <img className='w-6' src={EmRate} alt="rate" />
                            <img className='w-6' src={EmRate} alt="rate" />
                        </div>
                        <div>
                        
                        </div>{
                            <div className='h-8 w-12 flex items-center justify-between 
                                            border border-[#E5F2E9] bg-[#E5F2E9] rounded sm:gap-2'>
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
                    <span className='md:text-base text-[10px] md:text-black text-[#717171]'>{price}تومان</span>
                </div>
            </div>
        </div>
    );
};

export default CartFoodComponent;