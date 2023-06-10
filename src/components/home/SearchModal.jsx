import React from 'react';

//import
import close from "../../img/icons/Closeicon.svg"
import search from "../../img/icons/search-normal.svg"

const SearchModal = ({isVisible , onClose}) => {

    if (!isVisible) return null

    const closeHandeler = (e) => {
        if(e.target.id === "wrapper") onClose()
    }

    return (
        <div
        id='wrapper'
        onClick={closeHandeler} 
        className='fixed rounded  duration-500 inset-0 fontEstedad bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30'>
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
                    className='flex mt-6 justify-between w-[409px] h-[40px] border-[1px] border-[#CBCBCB] rounded p-[8px_16px]' 
                    >
                    <input
                        className=''
                        placeholder='جستجو' 
                        type='text' />
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