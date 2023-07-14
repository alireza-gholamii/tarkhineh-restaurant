import React from 'react';
import BranchMenu from './BranchMenu';
import { useContext } from 'react';
import { FoodContext } from '../contexts/FoodContextProvider';
import Slider from "../home/Slider"
import BranchSlider from './BranchSlider';
import Comments from './Comments';

//img
import note from "/public/assets/img/icons/note.svg"

const Branch = () => {

    const foodList = useContext(FoodContext)

    return (
        <>
            <Slider />
            <div className='fontEstedad'>
                {
                    foodList.map(
                        (item , index) => <BranchMenu key={index} foods={item} />
                        )
                }
            </div>
            <div className='whitespace-nowrap flex m-[0_auto] text-[#417F56] justify-center items-center md:mb-12 bg-white p-[8px_16px] w-[152px] md:w-[184px] h-8 md:h-10 sm:gap-2 gap-1 rounded border border-[#417F56]'>
                <span>مشاهده منوی کامل</span>
                <img className='w-6' src={note} alt='more'/>
            </div>
            <BranchSlider />
            <Comments />
        </>
    );
};

export default Branch;