import React from 'react';

//image
import image1 from "../../img/branch-img/image.svg";
import image2 from "../../img/branch-img/image2.svg"
import gallery from "../../img/branch-img/hover-gallery.png"
import expend from "../../img/icons/expand 1.svg"
import closeIcon from "../../img/icons/closeIcon.svg"

const BranchModal = ({ isVisible , onClose }) => {
    
    if(! isVisible) return null

    const closeHandler = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }

    return (
        <div
            id='wrapper'
            onClick={closeHandler} 
            className='fixed duration-500 inset-0 fontEstedad bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30'>
           <div className='flex flex-col sm:w-[60vw] bg-white rounded'>
                <div className='mt-6'>
                    <h6 className='flex justify-center text-xl font-bold leading-9'>انتخاب شعبه</h6>
                    <img
                        onClick={() => onClose()} 
                        className='cursor-pointer m-[auto_auto_0_7px]' src={closeIcon} alt='close' />
                </div>
                <div className='flex justify-center items-center'>
                    <span>برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:</span>
                </div>
                <div>
                    <span></span>
                    <div className='flex flex-row '>
                        <Branch gallery={gallery} img={image1} name={"شعبه ونک"} address={"میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶"}/>
                        <Branch gallery={gallery} img={image1} name={"شعبه اقدسیه"} address={"خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸"}/>
                        <Branch gallery={gallery} img={image2} name={"شعبه چالوس"} address={"چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی"}/>
                        <Branch gallery={gallery} img={image2} name={"شعبه اکباتان"} address={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}/>    
                    </div>
                </div>
            </div>
        </div>
    );
};

const Branch = ({img , name , address, gallery}) => {
    return (
        <div className={`relative group flex sm:grid sm:m-[15px_auto] bg-white fontEstedad sm:w-[13vw] sm:h-[260px] rounded border-solid border-[#CBCBCB] hover:border-[#417F56] border-[1px]`}>
            <img className="w-36 sm:w-auto" alt='picture' src={img}/>
            <img className='hidden sm:group-hover:block absolute top-[22%] right-[43%]' src={gallery} alt="picture"/>
            <img className='flex sm:hidden absolute top-[80%] right-[2%]' src={expend} alt="expand" />
            <div className='flex flex-col justify-center'>
                <h5 className='flex items-center justify-center font-bold'>{name}</h5>
                <span className='flex mb-2 sm:text-sm text-center items-center justify-center'>{address}</span>    
            </div>
            </div>
    )
}

export default BranchModal;