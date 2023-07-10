import React from 'react';
import BranchMenu from './BranchMenu';
import { useContext } from 'react';
import { FoodContext } from '../contexts/FoodContextProvider';
import Slider from "../home/Slider"
import BranchSlider from './BranchSlider';
import Comments from './Comments';

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
            <BranchSlider />
            <Comments />
        </>
    );
};

export default Branch;