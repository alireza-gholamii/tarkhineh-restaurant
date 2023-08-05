import React, { useContext } from 'react';
import MenuFoodComponent from './MenuFoodComponent';
import { useParams } from 'react-router-dom';
import { FoodContext } from '../contexts/FoodContextProvider';
import Slider from '../home/Slider';

const MenuAllFoods = () => {
 
    const params = useParams();
    const {menu} = useContext(FoodContext);

    const categoryIndex = menu.findIndex(item => item[0] == params.category);
    const categorymenu = menu[categoryIndex]

    return (
        <>
            <Slider />
            <div className='w-[90%] m-[24px_auto] md:m-[52px_auto] flex flex-col gap-6'>
                <h3 className='text-lg md:text-2xl font-bold'>{params.category}</h3>
                <div className='flex flex-col md:grid gap-6 md:grid-cols-2 justify-center'>
                    {
                        categorymenu[1].map(
                            (item , index) => {
                                return(
                                    <MenuFoodComponent key={index} foodData={item} />
                                )
                            }
                        )
                    }
                
                </div>
            </div>
        </>
    );
};

export default MenuAllFoods;