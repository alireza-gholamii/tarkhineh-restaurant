import React from 'react';

//image
import image1 from "/public/assets/img/branch-img/image.svg";
import image2 from "/public/assets/img/branch-img/image2.svg"
import gallery from "/public/assets/img/branch-img/hover-gallery.png"
import arrow from "/public/assets/img/branch-img/arrow-left.svg"
import expend from "/public/assets/img/icons/expand 1.svg"
import { Link } from 'react-router-dom';

const TarkhinehGardi = () => {
    return (
        <div className='flex flex-col mt-12 mb-12'>
            <div className='flex justify-center m-[15px_auto]'>
                <span className='font-bold leading-9 text-2xl'>ترخینه گردی</span>
            </div>
            <div className='flex justify-center'>
                <div 
                    className='flex sm:flex-row gap-3 sm:gap-6 flex-col justify-center m-[0_4vw] lg:h-[400px]'>
                    <Link to="/branch/ونک">
                        <Branch gallery={gallery} img={image1} name={"شعبه ونک"} address={"میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶"}/>
                    </Link>
                    <Link to="/branch/اقدسیه">
                        <Branch gallery={gallery} img={image1} name={"شعبه اقدسیه"} address={"خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸"}/>
                    </Link>
                    <Link to="/branch/چالوس">
                        <Branch gallery={gallery} img={image2} name={"شعبه چالوس"} address={"چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی"}/>
                    </Link>
                    <Link to="/branch/اکباتان">
                        <Branch gallery={gallery} img={image2} name={"شعبه اکباتان"} address={"شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"}/>    
                    </Link>
                </div>
            </div>
            </div>
    );
};

const Branch = ({img , name , address, gallery}) => {
    return (
        <div className={`hover:shadow-xl duration-200 relative group flex sm:grid sm:m-[15px_auto] bg-white sm:w-[20vw] max-w-[300px] sm:h-[340px] rounded border-solid border-[#417F56] border-[1px]`}>
                <img className="w-36 sm:w-full h-fitt" alt='picture' src={img}/>
            <img className='hidden sm:group-hover:block absolute top-[25%] right-[45%]' src={gallery} alt="picture"/>
            <img className='flex sm:hidden absolute top-[80%] right-[2%]' src={expend} alt="expand" />
            <div className='flex flex-col justify-center'>
                <h5 className='flex items-center justify-center font-bold'>{name}</h5>
                <span className='flex mb-2 sm:text-sm text-center items-center justify-center text-xs sm:text-base'>{address}</span>    
                <Link href='#' className={`hidden sm:group-hover:flex justify-center items-center text-xs m-[0_auto] mb-4 w-[10vw] h-9 text-[#315F41] rounded border-solid border-[#417F56] border-[1px]`}>صفحه شعبه <img className='w-4' src={arrow} alt='arrow' /></Link>
            </div>
            </div>
    )
}

export default TarkhinehGardi;