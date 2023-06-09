import React from 'react';

//image
import image1 from "../../img/branch-img/image.svg";
import image2 from "../../img/branch-img/image2.svg"
import gallery from "../../img/branch-img/hover-gallery.png"
import arrow from "../../img/branch-img/arrow-left.svg"
import expend from "../../img/icons/expand 1.svg"

const BranchModal = () => {
    
    return (
        <div >
            <div>
                <h6>انتخاب شعبه</h6>
                <img src='' alt='close' />
            </div>
            <div>
                <span></span>
                <div className='flex sm:flex-row gap-4 sm:gap-0 flex-col m-[0_4vw] lg:h-[400px]'>
                    <Branch gallery={gallery} img={image1} name={"شعبه ونک"} address={"میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶"}/>
                    <Branch gallery={gallery} img={image1} name={"شعبه اقدسیه"} address={"خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸"}/>
                    <Branch gallery={gallery} img={image2} name={"شعبه چالوس"} address={"چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی"}/>
                    <Branch gallery={gallery} img={image2} name={"شعبه اکباتان"} address={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}/>    
                </div>
            </div>
        </div>
    );
};

const Branch = ({img , name , address, gallery}) => {
    return (
        <div className={`relative group flex sm:grid sm:m-[15px_auto] bg-white fontEstedad sm:w-[20vw] sm:h-[360px] rounded border-solid border-[#417F56] border-[1px]`}>
            <img className="w-36 sm:w-auto" alt='picture' src={img}/>
            <img className='hidden sm:group-hover:block absolute top-[25%] right-[45%]' src={gallery} alt="picture"/>
            <img className='flex sm:hidden absolute top-[80%] right-[2%]' src={expend} alt="expand" />
            <div className='flex flex-col justify-center'>
                <h5 className='flex items-center justify-center font-bold'>{name}</h5>
                <span className='flex mb-2 sm:text-sm text-center items-center justify-center'>{address}</span>    
                <a href='#' className={`hidden sm:group-hover:flex justify-center items-center text-xs m-[0_auto] mb-4 w-[10vw] h-9 text-[#315F41] rounded border-solid border-[#417F56] border-[1px]`}>صفحه شعبه <img className='w-4' src={arrow} alt='arrow' /></a>
            </div>
            </div>
    )
}

export default BranchModal;