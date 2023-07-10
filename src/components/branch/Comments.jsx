import React, { createRef, useEffect } from 'react';

//userImage
import user1 from "/public/assets/img/users/user1.png"
import user2 from "/public/assets/img/users/user2.png"
import user3 from "/public/assets/img/users/user3.png"

//icon
import Rate from "/assets/img/icons/StarRate.svg"
import leftArrow from "/public/assets/img/icons/arrow-left-food.svg";

const Comments = () => {

    
    const scroller = createRef(null)

    var rightVisable = 0;
    const leftScroll = () => {
        var slider = scroller.current;
        slider.scrollLeft = slider.scrollLeft - 150;
    }
    const rightScroll = () => {
        var slider = scroller.current;
        slider.scrollLeft = slider.scrollLeft + 150
    }

    useEffect(
        () => {
            scroller.current.scrollLeft > 1 ? rightVisable = "flex" : rightVisable = "hidden";
        }
    )


    const comment = [
        {
            name: "نگار اسماعیل زاده",
            profile : user1,
            birth : "۲۳ اسفند ۱۴۰۱",
            comment : "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
            rate : "4"
        },{
            profile : user2,
            name: "عباد الله عبدالهی",
            birth : "۲۳ اسفند ۱۴۰۱",
            comment : "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
            rate : "3"
        },{
            profile : user3,
            name: "علیرضا غلامی",
            birth : "۲۳ اسفند ۱۴۰۱",
            comment : "از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌های ترخینه واقعا تشکر میکنم. ",
            rate : "5"
        }
    ]

    return (
        <div className='relative md:mt-[148px] md:h-[350px] flex flex-col items-center'>
            <h6 className='text-2xl font-bold'>نظرات کاربران</h6>
            <div 
                ref={scroller}
                className='flex gap-6 items-center scrollbar-hide w-full h-full overflow-x-scroll scroll scroll-smooth'>
                {
                    comment.map(
                        (item , index) => <Comment items={item} key={index}/>
                    )
                }
            </div>
            <div
                    onClick={leftScroll}
                    className='flex items-center justify-center cursor-pointer absolute top-[45%] left-6 text-xl sm:text-4x bg-white rounded-lg border-[1px] border-solid border-[#CBCBCB] w-10 h-10 text-white cursore-pointer'>
                    <img src={leftArrow} alt="arrow" />
                </div>
                <div
                    
                    onClick={rightScroll}
                    className={`flex items-center justify-center rotate-180 cursor-pointer absolute top-[45%] right-6 text-xl sm:text-4xl bg-white rounded-lg border-[1px] border-solid border-[#CBCBCB] w-10 h-10 cursore-pointer`}>
                    <img src={leftArrow} alt="arrow" />
            </div>
        </div>
    );
};

const Comment = ({items}) => {
    
    const {profile , name , birth , comment , rate} = items;

    return(
        <div className='flex w-[600px] gap-x-[13px] items-center h-[202px] md:p-[24px_32px] border border-[#CBCBCB] rounded-lg'>
            <div className='flex flex-col gap-y-2'>
                <img src={profile} alt="profile" />
                <div className='flex flex-col text-[#CBCBCB] text-[12px]'>
                    <span>{name}</span>
                    <span>{birth}</span>
                </div>
            </div>
            <div className='flex flex-col justify-between w-[427px]'>
                <span className="text-justify">{comment}</span>
                <div className='flex justify-end'>
                    <span className=''>{rate}</span>
                    <img src={Rate} alt="rate" />
                </div>
            </div>
           
        </div>
    )
}

export default Comments;