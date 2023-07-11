import React, { createContext } from 'react';

//image
import offer1 from "/assets/img/foodsPhoto/offer/photo1.jpg"
import offer2 from "/assets/img/foodsPhoto/offer/photo2.png"
import offer3 from "/assets/img/foodsPhoto/offer/photo3.png"
import offer4 from "/assets/img/foodsPhoto/offer/photo4.png"
import offer5 from "/assets/img/foodsPhoto/offer/photo5.png"

import popularF1 from "/assets/img/foodsPhoto/popularFoods/photo1.png"
import popularF2 from "/assets/img/foodsPhoto/popularFoods/photo2.png"
import popularF3 from "/assets/img/foodsPhoto/popularFoods/photo3.png"
import popularF4 from "/assets/img/foodsPhoto/popularFoods/photo4.png"
import popularF5 from "/assets/img/foodsPhoto/popularFoods/photo5.png"

import IranianF1 from "/public/assets/img/foodsPhoto/IranianFood/photo1.png"
import IranianF2 from "/public/assets/img/foodsPhoto/IranianFood/photo2.png"
import IranianF3 from "/public/assets/img/foodsPhoto/IranianFood/photo3.png"
import IranianF4 from "/public/assets/img/foodsPhoto/IranianFood/photo4.png"
import IranianF5 from "/public/assets/img/foodsPhoto/IranianFood/photo5.png"

export const FoodContext = createContext();

const FoodContextProvider = ( {children} ) => {

    const foods = [
        [
            "پیشنهاد ویژه",
            "#fff",
            [
                {
                    image : offer1,
                    name:"دلمه برگ کلم",
                    price:"220000",
                    offer:"15",
                    rate:"5",
                    rateCont:"25",
                    intrested : false
                },
                {
                    image : offer2,
                    name:"بادمجان شکم‌پر",
                    price:"150000",
                    offer:"10",
                    rate:"5",
                    rateCont:"20",
                    intrested : false
                },
                {
                    image : offer3,
                    name:"کالزونه اسفناج",
                    price:"190000",
                    offer:"20",
                    rate:"5",
                    rateCont:"32",
                    intrested : false
                },
                {
                    image : offer4,
                    name:"پیتزا قارچ",
                    price:"220000",
                    offer:"25",
                    rate:"5",
                    rateCont:"34",
                    intrested : false
                },
                {
                    image : offer5,
                    name:"پاستا سبزیجات",
                    price:"250000",
                    offer:"19",
                    rate:"5",
                    rateCont:"15",
                    intrested : false
                },{
                    image : offer1,
                    name:"دلمه برگ کلم",
                    price:"220000",
                    offer:"15",
                    rate:"5",
                    rateCont:"25",
                    intrested : false
                },
                {
                    image : offer2,
                    name:"بادمجان شکم‌پر",
                    price:"150000",
                    offer:"10",
                    rate:"5",
                    rateCont:"20",
                    intrested : false
                },
                {
                    image : offer3,
                    name:"کالزونه اسفناج",
                    price:"190000",
                    offer:"20",
                    rate:"5",
                    rateCont:"32",
                    intrested : false
                },
                {
                    image : offer4,
                    name:"پیتزا قارچ",
                    price:"220000",
                    offer:"25",
                    rate:"5",
                    rateCont:"34",
                    intrested : false
                },
                {
                    image : offer5,
                    name:"پاستا سبزیجات",
                    price:"250000",
                    offer:"19",
                    rate:"5",
                    rateCont:"15",
                    intrested : false
                },
            ]
        ],
        [
            "غذاهای محبوب",
            "#315F41",
            [
                {
                    image : popularF1,
                    name:"پنینی اسفناج",
                    price:"215000",
                    offer:"15",
                    rate:"4",
                    rateCont:"13",
                    intrested : false
                },
                {
                    image : popularF2,
                    name:"پیتزا پپرونی",
                    price:"230000",
                    offer:"13",
                    rate:"5",
                    rateCont:"16",
                    intrested : false
                },
                {
                    image : popularF3,
                    name:"راتاتویی",
                    price:"240000",
                    offer:"16",
                    rate:"5",
                    rateCont:"17",
                    intrested : false
                },
                {
                    image : popularF4,
                    name:"بورانی بادمجان",
                    price:"190000",
                    offer:"19",
                    rate:"5",
                    rateCont:"14",
                    intrested : false
                },
                {
                    image : popularF5,
                    name:"پاکورا گیاهی",
                    price:"180000",
                    offer:"16",
                    rate:"4",
                    rateCont:"19",
                    intrested : false
                },{
                    image : popularF1,
                    name:"پنینی اسفناج",
                    price:"215000",
                    offer:"15",
                    rate:"4",
                    rateCont:"13",
                    intrested : false
                },
                {
                    image : popularF2,
                    name:"پیتزا پپرونی",
                    price:"230000",
                    offer:"13",
                    rate:"5",
                    rateCont:"16",
                    intrested : false
                },
                {
                    image : popularF3,
                    name:"راتاتویی",
                    price:"240000",
                    offer:"16",
                    rate:"5",
                    rateCont:"17",
                    intrested : false
                },
                {
                    image : popularF4,
                    name:"بورانی بادمجان",
                    price:"190000",
                    offer:"19",
                    rate:"5",
                    rateCont:"14",
                    intrested : false
                },
                {
                    image : popularF5,
                    name:"پاکورا گیاهی",
                    price:"180000",
                    offer:"16",
                    rate:"4",
                    rateCont:"19",
                    intrested : false
                }
            ]
        ],
        [
            "غذاهای غیر ایرانی",
            "#fff",
            [
                {
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCont:"12",
                    intrested : false
                },
                {
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCont:"13",
                    intrested : false
                },
                {
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCont:"13",
                    intrested : false
                },
                {
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCont:"19",
                    intrested : false
                },
                {
                    image : IranianF5,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCont:"15",
                    intrested : false
                },{
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCont:"12",
                    intrested : false
                },
                {
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCont:"13",
                    intrested : false
                },
                {
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCont:"13",
                    intrested : false
                },
                {
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCont:"19",
                    intrested : false
                },
                {
                    image : IranianF5,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCont:"15",
                    intrested : false
                }
            ]
        ]
    ]

    return (
        <FoodContext.Provider value={foods}>
            {children}
        </FoodContext.Provider>
    );
};

export default FoodContextProvider;