import React from 'react';

//img 
import Like from "/public/assets/img/icons/Like.svg"
import Rate from "/public/assets/img/icons/StarRate.svg"

const BranchFood = ({foodData}) => {

    const {image , name , price , offer , rate , rateCount , intrested} = foodData;
    
    return (
        <div>
            <img alt='food' src={image}/>
            <div>
                <h5>{name}</h5>
                <div>
                    <div>
                        <button onClick={()=>{}}><img src={Like} alt="" /></button>
                        <span>افزودن به علاقمندی‌ها</span>
                    </div>
                    <div>
                        <span>{price}</span>
                        <span>{offer}</span>
                    </div>
                    <div>
                        <img src={Rate} alt="star" />
                        <span>{rate}</span>
                        <span>{rateCount}</span>
                    </div>
                    <div>
                        <span>{price} تومان</span>
                    </div>
                </div>
                <button>افزودن به سبد خرید</button>
            </div>
        </div>
    );
};

export default BranchFood;