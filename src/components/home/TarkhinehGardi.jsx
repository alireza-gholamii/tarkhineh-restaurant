import React from 'react';

//image
import image1 from "../../img/branch-img/image.svg";
import image2 from "../../img/branch-img/image2.svg"
import gallery from "../../img/branch-img/hover-gallery.png"
import arrow from "../../img/branch-img/arrow-left.svg"

const TarkhinehGardi = () => {
    return (
        <div className='flex flex-col mt-12'>
            <div className='flex justify-center m-[15px_auto]'>
                <span className='fontEstedad font-bold leading-9 text-2xl'>ترخینه گردی</span>
            </div>
            <div className='flex flex-row m-[0_4vw]'>
                <Branch gallery={gallery} group={"a"} img={image1} name={"شعبه ونک"} address={"میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶"}/>
                <Branch gallery={gallery} group={"b"} img={image1} name={"شعبه اقدسیه"} address={"خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸"}/>
                <Branch gallery={gallery} group={"c"} img={image2} name={"شعبه چالوس"} address={"چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی"}/>
                <Branch gallery={gallery} group={"d"} img={image2} name={"شعبه اکباتان"} address={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}/>    
            </div>
            </div>
    );
};

const Branch = ({img , name , address, gallery , group}) => {
    return (
        <div className={`group grid m-[15px_auto] bg-white fontEstedad w-[20vw]  rounded-lg border-solid border-[#417F56] border-[1px]`}>
            <img className="" alt='picture' src={img}/>
            <img  className='flex justify-center items-center' src={gallery} alt="picture"/>
            <div className=''>
                <h5 className='flex items-center justify-center font-bold'>{name}</h5>
                <span className='flex mb-2 text-sm text-center items-center justify-center'>{address}</span>    
                <a className={`hidden group-hover:flex justify-center items-center text-xs m-[0_auto] mb-4 w-[10vw] h-9 text-[#315F41] rounded-sm border-solid border-[#417F56] border-[1px]`}>صفحه شعبه <img className='w-4' src={arrow} alt='arrow' /></a>
            </div>
            </div>
    )
}

export default TarkhinehGardi;