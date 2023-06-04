import React from 'react';
import Food from './Food';

//image
import maincourse from "../../img/menu-img/maincourse.png";
import starter from "../../img/menu-img/starter.png"
import dessert from "../../img/menu-img/dessert.png"
import drink from "../../img/menu-img/drink.png"

const Foods = () => {
    return (
        <div>
            <div className='flex'>
                <input
                    className='flex justify-center md:hidden'
                    type='text' 
                    placeholder='جستجو'/>
            </div>
            <h1 className='flex mt-4 justify-center fontEstedad text-2xl font-bold'>منوی رستوران</h1>
            <div className='grid  grid-cols-2 md:grid-cols-4 gap-y-15 mt-[5%]'>
                <Food img={drink} />
                <Food img={dessert} />
                <Food img={starter} />
                <Food img={maincourse} />
            </div>
        </div>
    );
};

export default Foods;