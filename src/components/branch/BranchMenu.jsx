import React, { useEffect } from 'react';
import BranchFood from './BranchFood';

import leftArrow from "/public/assets/img/icons/arrow-left-food.svg";
import { createRef } from 'react';

const BranchMenu = ({ foods }) => {

    const scroller = createRef(null)

    var rightVisable = 0;
    const leftScroll = () => {
        var slider = scroller.current;
        slider.scrollLeft = slider.scrollLeft - 150;
    }
    const rightScroll = () => {
        var slider = scroller.current;
        slider.scrollLeft = slider.scrollLeft + 150
    }

    useEffect(
        () => {
            scroller.current.scrollLeft > 1 ? rightVisable = "flex" : rightVisable = "hidden";
        }
    )

    return (
        <div className={`relative bg-[${foods[1]}] pr-[3vw] md:h-[550px]`}>

            <div>
                <h5 className={`md:pt-6 text-${foods[1] == "#315F41" ? "white" : "black"} sm:text-2xl leading-[140%] font-bold`}>
                    {foods[0]}
                </h5>
            </div>
            <div
                ref={scroller}
                className='flex h-full gap-x-3 sm:gap-x-4 scrollbar-hide overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                {
                    foods[2].map(
                        (item , index) =>
                                <BranchFood key={index} border={foods[1]} foodData={item} />
                                )
                            }
                <div
                    onClick={leftScroll}
                    className='flex items-center justify-center cursor-pointer absolute top-[45%] left-6 text-xl sm:text-4x bg-white rounded-lg border-[1px] border-solid border-[#CBCBCB] w-10 h-10 text-white cursore-pointer'>
                    <img src={leftArrow} alt="arrow" />
                </div>
                <div
                    
                    onClick={rightScroll}
                    className={`flex items-center justify-center rotate-180 cursor-pointer absolute top-[45%] right-6 text-xl sm:text-4xl bg-white rounded-lg border-[1px] border-solid border-[#CBCBCB] w-10 h-10 cursore-pointer`}>
                    <img src={leftArrow} alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default BranchMenu;