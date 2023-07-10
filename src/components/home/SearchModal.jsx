import React, { useEffect, useRef, useState } from 'react';

//import
import close from "/assets/img/icons/Closeicon.svg"
import search from "/assets/img/icons/search-normal.svg"
import { createContext } from 'react';

//context
const searchContext = createContext()

const SearchModal = ({isVisible , onClose}) => {

    if (!isVisible) return null

    const closeHandeler = (e) => {
        if(e.target.id === "wrapper") onClose()
    }

    const [inputValue , setInputValue] = useState("")
   
    const sendValue = () => {
        
    }

    const enterHandler = (e) => {
        if(e.key === 'Enter') {
            if(e.target.value !== "") sendValue()
        }
    }

    return (
        <div
        id='wrapper'
        onClick={closeHandeler} 
        className='fixed rounded  duration-500 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30'>
        <div className='flex flex-col sm:w-[600px] h-[253px] bg-white rounded'>
            <div className='flex p-2 h-[84px] bg-[#EDEDED]'>
                <h5 className='flex items-center m-[0_auto] text-xl font-bold leading-9'>جستجو</h5>
                <div
                    onClick={() => onClose()} 
                    className='flex justify-center items-center'>
                    <img

                    className='cursor-pointer m-[uto_auto_0_7px]'
                    src={close} alt='close'/>
                </div>
            </div>
            <div className='flex flex-col p-4 items-center'>
                <span>لطفا متن خود را تایپ و سپس دکمه Enter را بزنید.</span>
                <div
                    className='flex mt-6 justify-between border rounded border-[#CBCBCB] p-[8px_16px]'    
                    >
                    <input
                        className='w-[409px] h-[35px] outline-none ' 
                        placeholder='جستجو' 
                        type='text' 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={enterHandler}
                        />
                    <img
                        src={search}
                        />
                </div>
            </div> 
        </div>
    </div>

    );
};

export default SearchModal;

/**/