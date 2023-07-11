import React, { useEffect, useState } from 'react';

//icons
import rightArrow from "/public/assets/img/icons/Right Arrow.svg"
import leftArrow from "/public/assets/img/icons/left Arrow.svg"
import clock from "/public/assets/img/icons/clock.svg"
import location from "/public/assets/img/icons/location.svg"
import call from "/public/assets/img/icons/call-calling.svg"

//images
import slide1 from "/assets/img/slider/Slider1.svg"
import slide2 from "/assets/img/slider/Slider2.svg"
import slide3 from "/assets/img/slider/Slider3.svg"
import slide4 from "/assets/img/slider/Slider4.svg"
import slide5 from "/assets/img/slider/Slider5.svg"
import slide6 from "/assets/img/slider/Slider6.svg"

const BranchSlider = () => {

    const picture = [
        {url :`${slide1}`, text : "تجربه غذای سالم و گیاهی به سبک ترخینه"},
        {url:`${slide2}`, text : "هر روز، یک تجربه مزه جدید"},
        {url : `${slide3}`, text : "تجربه‌ای که فراموش نخواهید کرد"},
        {url :`${slide4}`, text : "طعم بی‌نظیر طبیعت!"},
        {url :`${slide5}`, text : "یک وعده غذایی ساده با هم"},
        {url : `${slide6}` , text : "طعمی که به یاد خواهید آورد"},
    ]

    const [currentIndex , setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentIndex + 1) % picture.length;
            setCurrentIndex(newIndex);
        }, 3000);
        return () => clearInterval(interval);
        }, [currentIndex]);

        const preveSlide = () => {
            const firstSlide = currentIndex === 0;
            const newIndex = firstSlide ? picture.length - 1 : currentIndex-1
            setCurrentIndex(newIndex)
        }
    
        const nextSlide = () => {
            const lastSlide = currentIndex === picture.length-1
            const newIndex = lastSlide ? 0 : currentIndex+1 
            setCurrentIndex(newIndex)
        }

    return (
<div className='group relative grid'>
            <div className={`w-[100%] h-44 md:h-[336px] bg-no-repeat bg-cover bg-center duration-500`}
                style={{backgroundImage : `url(${picture[currentIndex].url})`}}
            >
            </div>
            <div
                onClick={nextSlide}  
                className='group-hover:block cursor-pointer absolute hidden top-[45%] left-2 sm:left-6 text-xl sm:text-4xl bg-black/20 text-white cursore-pointer'>
                <img className='w-6 sm:w-auto' src={leftArrow} alt="arrow" />
            </div>
            <div
                onClick={preveSlide}
                className='group-hover:block cursor-pointer absolute hidden top-[45%] right-2 sm:right-6 text-xl sm:text-4xl text-white cursore-pointer'>
                <img className='w-6 sm:w-auto' src={rightArrow} alt="arrow" />
            </div>
            <div className='absolute justify-between  justify-self-center content-center top-[160px] md:top-[81%] bg-white
                            flex flex-wrap md:flex-nowrap md:flex-co w-[88vw] md:w-[830px] 
                            h-[60px] md:h-[130px] rounded-lg border-solid border-[3px]
                            border-[#417F56] md:justify-center items-center md:m-[16px_auto]
                            p-2 md:gap-x-[43px] gap-y-2'>
                <Address text={["۰۲۱-۳۳۵۳۵۳۵۴" , "۰۲۱-۳۳۵۳۵۳۵۶"]} img={call}/>
                <div className="order-first md:order-none h-[18px] w-[80vw] md:w-auto md:h-auto">
                    <Address  text={["شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"]} img={location}/>
                </div>
                <Address text={["همه‌روزه از ساعت ۱۲  الی ۲۳ "]} img={clock}/>
            </div>
        </div>
    );
};

const Address = ({text , img}) => {
    return (
        <>
            <div className='flex text-[6px] sm:text-[10px] md:text-base md:flex-col items-center gap-y-4 h-24 md:w-52'>
                <div className=''>
                    <img className='w-3 md:w-auto' src={img} alt='logo'/>
                </div>
                <div className='flex flex-col'>
                    {
                        text.map(item => <span className='whitespace-nowrap md:whitespace-normal h-3 md:h-7 text-center'>{item}</span>)
                    }
                </div>
            </div>
        </>
    );
}

export default BranchSlider;