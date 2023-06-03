import React from 'react';
import Food from './Food';

//image
import maincourse from "../../img/menu-img/maincourse.svg";
import starter from "../../img/menu-img/starter.svg"
import dessert from "../../img/menu-img/dessert.svg"
import drink from "../../img/menu-img/drink.svg"

const Foods = () => {
    return (
        <div>
            <div>
                <input
                    className='md:hidden '
                    type='text' 
                    placeholder='جستجو'/>
            </div>
            <h1 className='flex mt-4 justify-center fontEstedad text-2xl font-bold'>منوی رستوران</h1>
            <div className='m-[0-auto] flex justify-around mt-[150px]'>
                <Food img={drink} name="نوشیدنی" />
                <Food img={dessert} name="دسر" />
                <Food img={starter} name="پیش غذا" />
                <Food img={maincourse} name="غذای اصلی" />
            </div>
        </div>
    );
};

export default Foods;