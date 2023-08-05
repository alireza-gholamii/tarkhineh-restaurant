import React from 'react';
import { Link } from "react-router-dom"

//image
import image1 from "/public/assets/img/branch-img/image.svg";
import image2 from "/public/assets/img/branch-img/image2.svg"
import gallery from "/public/assets/img/branch-img/hover-gallery.png"
import expend from "/public/assets/img/icons/expand 1.svg"
import closeIcon from "/public/assets/img/icons/closeIcon.svg"

const BranchModal = ({ isVisible , onClose }) => {
    
    if(! isVisible) return null

    const closeHandler = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }

    return (
        <div
            id='wrapper'
            onClick={closeHandler} 
            className='fixed duration-500 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-30'>
           <div className='flex flex-col sm:w-[60vw] w-[88vw] h-[65vh] bg-white rounded'>
                <div className='flex justify-between sm:mt-6 sm:bg-white bg-[#EDEDED] p-[20px_17px]'>
                    <div className='sm:p-4'></div>
                    <h6 className='text-xl sm:font-bold font-medium leading-9 '>انتخاب شعبه</h6>
                    <img
                        onClick={() => onClose()} 
                        className='sm:w-auto w-6 cursor-pointer' src={closeIcon} alt='close' />
                </div>
                <div className='flex justify-center items-center'>
                    <span>برای دیدن منوی رستوران، لطفا شعبه مدنظر خود را انتخاب کنید:</span>
                </div>
                <div className='sm:m-[0_24px] m-[0_16px]'>
                    <div className='flex sm:flex-row sm:gap-x-5 gap-y-2 flex-col sm:w-auto w-[80%] '>
                        <Branch onClose={onClose} gallery={gallery} img={image1} name={"شعبه ونک"} address={"میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶"}/>
                        <Branch onClose={onClose} gallery={gallery} img={image1} name={"شعبه اقدسیه"} address={"خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸"}/>
                        <Branch onClose={onClose} gallery={gallery} img={image2} name={"شعبه چالوس"} address={"چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی"}/>
                        <Branch onClose={onClose} gallery={gallery} img={image2} name={"شعبه اکباتان"} address={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}/>    
                    </div>
                </div>
            </div>
        </div>
    );
};

const Branch = ({img , name , address, gallery , onClose}) => {
    const splitedName = name.split(" ");
    
    return (
        <Link  
            onClick={() => onClose()} to={`/branch/${splitedName[1]}`} 
            >
            <div
                className='relative group flex sm:grid sm:m-[15px_auto] bg-white sm:w-[13vw] w-[80vw] 
                sm:h-[240px] rounded border-solid border-[#CBCBCB] hover:border-[#417F56] border-[1px]'>
            
                <img className="sm:h-auto h-[10vh] sm:w-auto" alt='picture' src={img}/>
                <img className='hidden sm:group-hover:block absolute top-[22%] right-[43%]' src={gallery} alt="picture"/>
                <img className='flex sm:hidden absolute top-[80%] right-[2%]' src={expend} alt="expand" />
                <div className='flex flex-col justify-center'>
                    <h5 className='flex items-center justify-center sm:font-bold text-xs '>{name}</h5>
                    <span className='flex mb-2 sm:text-sm text-center items-center text-[10px] justify-center'>{address}</span>    
                </div>
            </div>
        </Link>
    )
}

export default BranchModal;