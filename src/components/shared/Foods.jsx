import React from 'react';

//image
import maincourse from "/assets/img/menu-img/maincourse.png";
import starter from "/assets/img/menu-img/starter.png"
import dessert from "/assets/img/menu-img/dessert.png"
import drink from "/assets/img/menu-img/drink.png"
import { Link } from 'react-router-dom';

const Foods = () => {
    return (
        <div>
            <div className='flex'>
                <input
                    className='flex justify-center md:hidden'
                    type='text' 
                    placeholder='جستجو'/>
            </div>
                <h1 className='flex mt-4 justify-center text-2xl font-bold'>منوی رستوران</h1>
            <div className='flex justify-center'>
                <div className='grid w-[90%] grid-cols-2 md:grid-cols-4 gap-y-15 mt-[5%]'>
                    <Link to="/menu/غذای اصلی">
                        <img src={maincourse} alt="menu" />
                    </Link>
                    <Link to="/menu/پیش غذا">
                        <img src={starter} alt="menu" />
                    </Link>
                    <Link to="/menu/دسر">
                        <img src={dessert} alt="menu" />
                    </Link>
                    <Link to="/menu/نوشیدنی">
                        <img src={drink} alt="menu" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Foods;