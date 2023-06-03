import React , {useState} from 'react';

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
        {url :`${slide1}`},
        {url:`${slide2}`},
        {url : `${slide3}` },
        {url :`${slide4}`},
        {url :`${slide5}`},
        {url : `${slide6}` },
    ]

    const [currentIndex , setCurrentIndex] = useState(0)

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
                
            </div>
            <div
                className='absolute justify-self-center content-end md:top-[90%] w-[154px] bg-no-repeat bg-cover h-[33px] top-[16.10vh]'
                style={{
                    backgroundImage : `url(${Rectangle})`
                }}
                >
                    <ul className='flex justify-center'>
                        {
                            picture.map(
                                (item , index) => <li 
                                    className='m-1'
                                    key={index} 
                                    onClick={() => setCurrentIndex(index)}>
                                        <button className=''>
                                            {index === currentIndex ? 
                                                <img src={slideButtons[0]} /> :
                                                <img src={slideButtons[1]}/>
                                            }
                                        </button>
                                    </li>
                            )
                        }
                    </ul>
            </div>
            <div
                onClick={nextSlide}  
                className='group-hover:block absolute hidden top-[45%] left-6 text-xl sm:text-4xl bg-black/20 text-white cursore-pointer'>
                <img src={leftArrow} alt="arrow" />
            </div>
            <div
                onClick={preveSlide}
                className='group-hover:block absolute hidden top-[45%] right-6 text-xl sm:text-4xl text-white cursore-pointer'>
                <img src={rightArrow} alt="arrow" />
            </div>
        </div>
    );
};

export default Slider;