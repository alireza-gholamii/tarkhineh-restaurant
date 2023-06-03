import React from 'react';

const Food = ({name , img}) => {
    return (
         <div
            className='relative m-2 rounded-xl h-[140px] w-[240px]'
            style={{background : "#417F56"}}
        >
            <img src={img} className={`absolute ${name === "نوشیدنی" ? 'top-[-130px]' : 'top-[-90px]'} sm:mr-5 z-10 w-[200px] `}/>
            <span className='absolute flex justify-center fontEstedad z-2 top-[-90px] mr-16 w-[100px] bg-white  mt-[205px] rounded-lg h-[45px]'>{name}</span>
        </div>
    );
};

export default Food;