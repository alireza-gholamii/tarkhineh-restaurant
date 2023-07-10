import React from 'react';

//img 
import Like from "/assets/img/icons/Like.svg"
import Rate from "/assets/img/icons/StarRate.svg"

const BranchFood = ({foodData , border}) => {

    const {image , name , price , offer , rate , rateCount , intrested} = foodData;
    
    return (
        <div className='inline-block '>
            <div className={`flex bg-white flex-col m-[16px_auto] w-[168px] cursor-auto
                            md:w-[20vw] h-[231px] sm:h-[433px]
                            border-solid ${border !== "#315F41" ? "border-[1px]": "border-[0px]"} border-[#CBCBCB] rounded-lg`}>
                {/* card image */}
                <img className='mb-1 h-[104px] sm:h-64' alt='food' src={image}/>
                
                <div className='flex flex-col p-4 sm:gap-4'>
                    <h5 className='flex justify-center 
                                leading-[180%] sm:text-xl 
                                text-xs sm:font-semibold'>
                        {name}
                    </h5>
                    <div className='flex flex-col h-[51px]'>
                    <div className='flex justify-between'>
                            <div className='flex'>
                                <button className='w-4 h-4'
                                            onClick={()=>{}}><img src={Like} alt=""/></button>
                                <span className='hidden md:block text-[10px] text-right text-[#ADADAD]'>
                                    افزودن به علاقمندی‌ها
                                </span>
                            </div>
                            <div className='flex'>
                                <span className='line-through text-[10px] text-[#ADADAD]'>{price}</span>
                                <span className='w-8 h-4 rounded-lg p-[0_8px_0_9px] bg-[#FFF2F2] text-[10px] text-[#C30000]'>{offer}%</span>
                            </div>
                    </div>
                        <div className='flex items-baselin justify-between'>
                            <div className='flex items-center'>
                                <img className='ml-1' src={Rate} alt="star" />
                                <span className='sm:text-sm text-[10px]'>{rate}</span>
                                <span className='hidden md:block text-[10px] text-[]'>{rateCount}</span>
                            </div>
                            <div>
                                <span className='text-[10px] sm:text-base'>{price} تومان</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <button  className='h-8 sm:h-10 w-[152px] sm:w-[17vw] max-w-[256px] text-white
                                            rounded bg-[#417F56] text-[10px] md:text-base'>افزودن به سبد خرید</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BranchFood;