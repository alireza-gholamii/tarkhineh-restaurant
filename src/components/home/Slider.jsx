import React , {useEffect, useState} from 'react';

//images
import slide1 from "../../img/slider/Slider1.svg"
import slide2 from "../../img/slider/Slider2.svg"
import slide3 from "../../img/slider/Slider3.svg"
import slide4 from "../../img/slider/Slider4.svg"
import slide5 from "../../img/slider/Slider5.svg"
import slide6 from "../../img/slider/Slider6.svg"

//icons
import rightArrow from "../../img/icons/Right Arrow.svg"
import leftArrow from "../../img/icons/left Arrow.svg"
import Rectangle from "../../img/icons/Rectangle2.svg"
import selectedSlidebutton from "../../img/icons/Ellipse.svg"
import slidebutton from "../../img/icons/Ellipse2.svg"


const Slider = () => {
    
    const slideButtons = [
        `${selectedSlidebutton}`,
        `${slidebutton}`
    ]
    
    const picture = [
        {url :`${slide1}`, text : "تجربه غذای سالم و گیاهی به سبک ترخینه"},
        {url:`${slide2}`, text : "هر روز، یک تجربه مزه جدید"},
        {url : `${slide3}`, text : "تجربه‌ای که فراموش نخواهید کرد"},
        {url :`${slide4}`, text : "طعم بی‌نظیر طبیعت!"},
        {url :`${slide5}`, text : "یک وعده غذایی ساده با هم"},
        {url : `${slide6}` , text : "طعمی که به یاد خواهید آورد"},
    ]

    const [currentIndex , setCurrentIndex] = useState(0)

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
            <div className={`w-[100%] h-[20vh] md:h-[40vh] bg-no-repeat bg-cover bg-center duration-500`}
                style={{backgroundImage : `url(${picture[currentIndex].url})`}}
            >
            <div>
                <span className='sm:mt-[6vh] mt-[9vh] text-white flex justify-center text-base sm:text-4xl fontEstedad [0_24px]'>{picture[currentIndex].text}</span>
                <div className='flex justify-center md:mt-[10vh] mt-[1vh]'>
                    <button className=' bg-[#417F56] md:rounded-[8px] rounded-[4px] text-white fontEstedad font-normal h-[34px] w-[140px] md:w-[11.5rem] md:h-[40px]'>سفارش انلاین غذا</button>
                </div>
            </div>
            </div>
            <div
                className='absolute justify-self-center content-end md:top-[91%] sm:w-[154px] sm:h-[33px] w-[89px] h-[19px] bg-no-repeat bg-cover top-[18.2vh]'
                style={{
                    backgroundImage : `url(${Rectangle})`
                }}
                >
                    <ul className='flex justify-center md:mt-[9px]'>
                        {
                            picture.map(
                                (item , index) => <li 
                                    className='ml-1'
                                    key={index} 
                                    onClick={() => setCurrentIndex(index)}>
                                        <button 
                                            className=''>
                                            {index === currentIndex ? 
                                                <img className='sm:w-4 w-2' src={slideButtons[0]} /> :
                                                <img className='sm:w-2 w-1' src={slideButtons[1]}/>
                                            }
                                        </button>
                                    </li>
                            )
                        }
                    </ul>
            </div>
            <div
                onClick={nextSlide}  
                className='group-hover:block cursor-pointer absolute hidden top-[45%] left-6 text-xl sm:text-4xl bg-black/20 text-white cursore-pointer'>
                <img src={leftArrow} alt="arrow" />
            </div>
            <div
                onClick={preveSlide}
                className='group-hover:block cursor-pointer absolute hidden top-[45%] right-6 text-xl sm:text-4xl text-white cursore-pointer'>
                <img src={rightArrow} alt="arrow" />
            </div>
        </div>
    );
};

export default Slider;