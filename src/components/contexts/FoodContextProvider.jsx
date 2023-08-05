import React, { createContext } from 'react';

//image
import offer1 from "/assets/img/foodsPhoto/offer/photo1.jpg"
import offer2 from "/assets/img/foodsPhoto/offer/photo2.png"
import offer3 from "/assets/img/foodsPhoto/offer/photo3.png"
import offer4 from "/assets/img/foodsPhoto/offer/photo4.png"

import popularF1 from "/assets/img/foodsPhoto/popularFoods/photo1.png"
import popularF2 from "/assets/img/foodsPhoto/popularFoods/photo2.png"
import popularF3 from "/assets/img/foodsPhoto/popularFoods/photo3.png"
import popularF4 from "/assets/img/foodsPhoto/popularFoods/photo4.png"

import IranianF1 from "/public/assets/img/foodsPhoto/IranianFood/photo1.png"
import IranianF2 from "/public/assets/img/foodsPhoto/IranianFood/photo2.png"
import IranianF3 from "/public/assets/img/foodsPhoto/IranianFood/photo3.png"
import IranianF4 from "/public/assets/img/foodsPhoto/IranianFood/photo4.png"

export const FoodContext = createContext();

const FoodContextProvider = ( {children} ) => {

    const foods = [
        [
            "پیشنهاد ویژه",
            "#fff",
            [
                {
                    id:0,
                    image : offer1,
                    name:"دلمه برگ کلم",
                    price:"220000",
                    offer:"15",
                    rate:"5",
                    rateCount:"25",
                    intrested : false
                },
                {
                    id:1,
                    image : offer2,
                    name:"بادمجان شکم‌پر",
                    price:"150000",
                    offer:"10",
                    rate:"5",
                    rateCount:"20",
                    intrested : false
                },
                {
                    id:2,
                    image : offer3,
                    name:"کالزونه اسفناج",
                    price:"190000",
                    offer:"20",
                    rate:"5",
                    rateCount:"32",
                    intrested : false
                },
                {
                    id:3,
                    image : offer4,
                    name:"پیتزا قارچ",
                    price:"220000",
                    offer:"25",
                    rate:"5",
                    rateCount:"34",
                    intrested : false
                },
                {
                    id:4,
                    image : offer3,
                    name:"پاستا سبزیجات",
                    price:"250000",
                    offer:"19",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:5,
                    image : offer1,
                    name:"دلمه برگ کلم",
                    price:"220000",
                    offer:"15",
                    rate:"5",
                    rateCount:"25",
                    intrested : false
                },
                {
                    id:6,
                    image : offer2,
                    name:"بادمجان شکم‌پر",
                    price:"150000",
                    offer:"10",
                    rate:"5",
                    rateCount:"20",
                    intrested : false
                },
                {
                    id:7,
                    image : offer3,
                    name:"کالزونه اسفناج",
                    price:"190000",
                    offer:"20",
                    rate:"5",
                    rateCount:"32",
                    intrested : false
                },
                {
                    id:8,
                    image : offer4,
                    name:"پیتزا قارچ",
                    price:"220000",
                    offer:"25",
                    rate:"5",
                    rateCount:"34",
                    intrested : false
                },
                {
                    id:9,
                    image : offer3,
                    name:"پاستا سبزیجات",
                    price:"250000",
                    offer:"19",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:11,
                    image : offer1,
                    name:"دلمه برگ کلم",
                    price:"220000",
                    offer:"15",
                    rate:"5",
                    rateCount:"25",
                    intrested : false
                },
                {
                    id:12,
                    image : offer2,
                    name:"بادمجان شکم‌پر",
                    price:"150000",
                    offer:"10",
                    rate:"5",
                    rateCount:"20",
                    intrested : false
                },
                {
                    id:13,
                    image : offer3,
                    name:"کالزونه اسفناج",
                    price:"190000",
                    offer:"20",
                    rate:"5",
                    rateCount:"32",
                    intrested : false
                },
                {
                    id:14,
                    image : offer4,
                    name:"پیتزا قارچ",
                    price:"220000",
                    offer:"25",
                    rate:"5",
                    rateCount:"34",
                    intrested : false
                },
                {
                    id:15,
                    image : offer3,
                    name:"پاستا سبزیجات",
                    price:"250000",
                    offer:"19",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:16,
                    image : offer1,
                    name:"دلمه برگ کلم",
                    price:"220000",
                    offer:"15",
                    rate:"5",
                    rateCount:"25",
                    intrested : false
                },
                {
                    id:17,
                    image : offer2,
                    name:"بادمجان شکم‌پر",
                    price:"150000",
                    offer:"10",
                    rate:"5",
                    rateCount:"20",
                    intrested : false
                },
                {
                    id:18,
                    image : offer3,
                    name:"کالزونه اسفناج",
                    price:"190000",
                    offer:"20",
                    rate:"5",
                    rateCount:"32",
                    intrested : false
                },
                {
                    id:19,
                    image : offer4,
                    name:"پیتزا قارچ",
                    price:"220000",
                    offer:"25",
                    rate:"5",
                    rateCount:"34",
                    intrested : false
                },
                {
                    id:20,
                    image : offer3,
                    name:"پاستا سبزیجات",
                    price:"250000",
                    offer:"19",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },
            ]
        ],
        [
            "غذاهای محبوب",
            "#315F41",
            [
                {
                    id:21,
                    image : popularF1,
                    name:"پنینی اسفناج",
                    price:"215000",
                    offer:"15",
                    rate:"4",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:22,
                    image : popularF2,
                    name:"پیتزا پپرونی",
                    price:"230000",
                    offer:"13",
                    rate:"5",
                    rateCount:"16",
                    intrested : false
                },
                {
                    id:23,
                    image : popularF3,
                    name:"راتاتویی",
                    price:"240000",
                    offer:"16",
                    rate:"5",
                    rateCount:"17",
                    intrested : false
                },
                {
                    id:24,
                    image : popularF4,
                    name:"بورانی بادمجان",
                    price:"190000",
                    offer:"19",
                    rate:"5",
                    rateCount:"14",
                    intrested : false
                },
                {
                    id:25,
                    image : popularF3,
                    name:"پاکورا گیاهی",
                    price:"180000",
                    offer:"16",
                    rate:"4",
                    rateCount:"19",
                    intrested : false
                },{
                    id:26,
                    image : popularF1,
                    name:"پنینی اسفناج",
                    price:"215000",
                    offer:"15",
                    rate:"4",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:27,
                    image : popularF2,
                    name:"پیتزا پپرونی",
                    price:"230000",
                    offer:"13",
                    rate:"5",
                    rateCount:"16",
                    intrested : false
                },
                {
                    id:28,
                    image : popularF3,
                    name:"راتاتویی",
                    price:"240000",
                    offer:"16",
                    rate:"5",
                    rateCount:"17",
                    intrested : false
                },
                {
                    id:29,
                    image : popularF4,
                    name:"بورانی بادمجان",
                    price:"190000",
                    offer:"19",
                    rate:"5",
                    rateCount:"14",
                    intrested : false
                },
                {
                    id:30,
                    image : popularF3,
                    name:"پاکورا گیاهی",
                    price:"180000",
                    offer:"16",
                    rate:"4",
                    rateCount:"19",
                    intrested : false
                },{
                    id:31,
                    image : popularF1,
                    name:"پنینی اسفناج",
                    price:"215000",
                    offer:"15",
                    rate:"4",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:32,
                    image : popularF2,
                    name:"پیتزا پپرونی",
                    price:"230000",
                    offer:"13",
                    rate:"5",
                    rateCount:"16",
                    intrested : false
                },
                {
                    id:33,
                    image : popularF3,
                    name:"راتاتویی",
                    price:"240000",
                    offer:"16",
                    rate:"5",
                    rateCount:"17",
                    intrested : false
                },
                {
                    id:34,
                    image : popularF4,
                    name:"بورانی بادمجان",
                    price:"190000",
                    offer:"19",
                    rate:"5",
                    rateCount:"14",
                    intrested : false
                },
                {
                    id:35,
                    image : popularF3,
                    name:"پاکورا گیاهی",
                    price:"180000",
                    offer:"16",
                    rate:"4",
                    rateCount:"19",
                    intrested : false
                },{
                    id:36,
                    image : popularF1,
                    name:"پنینی اسفناج",
                    price:"215000",
                    offer:"15",
                    rate:"4",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:37,
                    image : popularF2,
                    name:"پیتزا پپرونی",
                    price:"230000",
                    offer:"13",
                    rate:"5",
                    rateCount:"16",
                    intrested : false
                },
                {
                    id:38,
                    image : popularF3,
                    name:"راتاتویی",
                    price:"240000",
                    offer:"16",
                    rate:"5",
                    rateCount:"17",
                    intrested : false
                },
                {
                    id:39,
                    image : popularF4,
                    name:"بورانی بادمجان",
                    price:"190000",
                    offer:"19",
                    rate:"5",
                    rateCount:"14",
                    intrested : false
                },
                {
                    id:40,
                    image : popularF3,
                    name:"پاکورا گیاهی",
                    price:"180000",
                    offer:"16",
                    rate:"4",
                    rateCount:"19",
                    intrested : false
                }
            ]
        ],
        [
            "غذاهای غیر ایرانی",
            "#fff",
            [
                {
                    id:41,
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:42,
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:43,
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:44,
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:45,
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:46,
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:47,
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:48,
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:49,
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:50,
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:51,
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:52,
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:53,
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:54,
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:55,
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:56,
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:57,
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:58,
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:59,
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:60,
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                }
            ]
        ]
    ]

    const menu = [
        [
            "غذای اصلی",
            [
                {
                    id:0,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer1,
                    name:"دلمه برگ کلم",
                    price:"220000",
                    offer:"15",
                    rate:"5",
                    rateCount:"25",
                    intrested : false
                },
                {
                    id:1,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer2,
                    name:"بادمجان شکم‌پر",
                    price:"150000",
                    offer:"10",
                    rate:"5",
                    rateCount:"20",
                    intrested : false
                },
                {
                    id:2,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer3,
                    name:"کالزونه اسفناج",
                    price:"190000",
                    offer:"20",
                    rate:"5",
                    rateCount:"32",
                    intrested : false
                },
                {
                    id:3,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer4,
                    name:"پیتزا قارچ",
                    price:"220000",
                    offer:"25",
                    rate:"5",
                    rateCount:"34",
                    intrested : false
                },
                {
                    id:4,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer3,
                    name:"پاستا سبزیجات",
                    price:"250000",
                    offer:"19",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:5,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer1,
                    name:"دلمه برگ کلم",
                    price:"220000",
                    offer:"15",
                    rate:"5",
                    rateCount:"25",
                    intrested : false
                },
                {
                    id:6,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer2,
                    name:"بادمجان شکم‌پر",
                    price:"150000",
                    offer:"10",
                    rate:"5",
                    rateCount:"20",
                    intrested : false
                },
                {
                    id:7,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer3,
                    name:"کالزونه اسفناج",
                    price:"190000",
                    offer:"20",
                    rate:"5",
                    rateCount:"32",
                    intrested : false
                },
                {
                    id:8,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer4,
                    name:"پیتزا قارچ",
                    price:"220000",
                    offer:"25",
                    rate:"5",
                    rateCount:"34",
                    intrested : false
                },
                {
                    id:9,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer3,
                    name:"پاستا سبزیجات",
                    price:"250000",
                    offer:"19",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:11,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer1,
                    name:"دلمه برگ کلم",
                    price:"220000",
                    offer:"15",
                    rate:"5",
                    rateCount:"25",
                    intrested : false
                },
                {
                    id:12,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer2,
                    name:"بادمجان شکم‌پر",
                    price:"150000",
                    offer:"10",
                    rate:"5",
                    rateCount:"20",
                    intrested : false
                },
                {
                    id:13,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer3,
                    name:"کالزونه اسفناج",
                    price:"190000",
                    offer:"20",
                    rate:"5",
                    rateCount:"32",
                    intrested : false
                },
                {
                    id:14,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer4,
                    name:"پیتزا قارچ",
                    price:"220000",
                    offer:"25",
                    rate:"5",
                    rateCount:"34",
                    intrested : false
                },
                {
                    id:15,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer3,
                    name:"پاستا سبزیجات",
                    price:"250000",
                    offer:"19",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:16,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer1,
                    name:"دلمه برگ کلم",
                    price:"220000",
                    offer:"15",
                    rate:"5",
                    rateCount:"25",
                    intrested : false
                },
                {
                    id:17,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer2,
                    name:"بادمجان شکم‌پر",
                    price:"150000",
                    offer:"10",
                    rate:"5",
                    rateCount:"20",
                    intrested : false
                },
                {
                    id:18,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer3,
                    name:"کالزونه اسفناج",
                    price:"190000",
                    offer:"20",
                    rate:"5",
                    rateCount:"32",
                    intrested : false
                },
                {
                    id:19,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer4,
                    name:"پیتزا قارچ",
                    price:"220000",
                    offer:"25",
                    rate:"5",
                    rateCount:"34",
                    intrested : false
                },
                {
                    id:20,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : offer3,
                    name:"پاستا سبزیجات",
                    price:"250000",
                    offer:"19",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },
            ]
        ],
        [
            "پیش غذا",
            [
                {
                    id:21,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF1,
                    name:"پنینی اسفناج",
                    price:"215000",
                    offer:"15",
                    rate:"4",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:22,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF2,
                    name:"پیتزا پپرونی",
                    price:"230000",
                    offer:"13",
                    rate:"5",
                    rateCount:"16",
                    intrested : false
                },
                {
                    id:23,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF3,
                    name:"راتاتویی",
                    price:"240000",
                    offer:"16",
                    rate:"5",
                    rateCount:"17",
                    intrested : false
                },
                {
                    id:24,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF4,
                    name:"بورانی بادمجان",
                    price:"190000",
                    offer:"19",
                    rate:"5",
                    rateCount:"14",
                    intrested : false
                },
                {
                    id:25,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF3,
                    name:"پاکورا گیاهی",
                    price:"180000",
                    offer:"16",
                    rate:"4",
                    rateCount:"19",
                    intrested : false
                },{
                    id:26,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF1,
                    name:"پنینی اسفناج",
                    price:"215000",
                    offer:"15",
                    rate:"4",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:27,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF2,
                    name:"پیتزا پپرونی",
                    price:"230000",
                    offer:"13",
                    rate:"5",
                    rateCount:"16",
                    intrested : false
                },
                {
                    id:28,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF3,
                    name:"راتاتویی",
                    price:"240000",
                    offer:"16",
                    rate:"5",
                    rateCount:"17",
                    intrested : false
                },
                {
                    id:29,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF4,
                    name:"بورانی بادمجان",
                    price:"190000",
                    offer:"19",
                    rate:"5",
                    rateCount:"14",
                    intrested : false
                },
                {
                    id:30,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF3,
                    name:"پاکورا گیاهی",
                    price:"180000",
                    offer:"16",
                    rate:"4",
                    rateCount:"19",
                    intrested : false
                },{
                    id:31,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF1,
                    name:"پنینی اسفناج",
                    price:"215000",
                    offer:"15",
                    rate:"4",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:32,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF2,
                    name:"پیتزا پپرونی",
                    price:"230000",
                    offer:"13",
                    rate:"5",
                    rateCount:"16",
                    intrested : false
                },
                {
                    id:33,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF3,
                    name:"راتاتویی",
                    price:"240000",
                    offer:"16",
                    rate:"5",
                    rateCount:"17",
                    intrested : false
                },
                {
                    id:34,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF4,
                    name:"بورانی بادمجان",
                    price:"190000",
                    offer:"19",
                    rate:"5",
                    rateCount:"14",
                    intrested : false
                },
                {
                    id:35,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF3,
                    name:"پاکورا گیاهی",
                    price:"180000",
                    offer:"16",
                    rate:"4",
                    rateCount:"19",
                    intrested : false
                },{
                    id:36,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF1,
                    name:"پنینی اسفناج",
                    price:"215000",
                    offer:"15",
                    rate:"4",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:37,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF2,
                    name:"پیتزا پپرونی",
                    price:"230000",
                    offer:"13",
                    rate:"5",
                    rateCount:"16",
                    intrested : false
                },
                {
                    id:38,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF3,
                    name:"راتاتویی",
                    price:"240000",
                    offer:"16",
                    rate:"5",
                    rateCount:"17",
                    intrested : false
                },
                {
                    id:39,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF4,
                    name:"بورانی بادمجان",
                    price:"190000",
                    offer:"19",
                    rate:"5",
                    rateCount:"14",
                    intrested : false
                },
                {
                    id:40,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : popularF3,
                    name:"پاکورا گیاهی",
                    price:"180000",
                    offer:"16",
                    rate:"4",
                    rateCount:"19",
                    intrested : false
                }
            ]
        ],
        [
            "نوشیدنی",
            [
                {
                    id:41,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:42,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:43,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:44,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:45,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:46,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:47,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:48,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:49,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:50,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:51,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:52,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:53,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:54,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:55,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:56,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:57,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:58,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:59,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:60,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                }
            ]
        ],
        [
            "دسر",
            [
                {
                    id:1,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:62,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:63,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:64,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:65,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:66,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:67,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:68,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:69,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:70,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:71,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:72,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:73,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:74,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:75,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                },{
                    id:76,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF1,
                    name:"سوشی",
                    price:"235000",
                    offer:"16",
                    rate:"5",
                    rateCount:"12",
                    intrested : false
                },
                {
                    id:77,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF2,
                    name:"راتاتویی",
                    price:"220000",
                    offer:"16",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:78,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"پاکورا سبزیجات",
                    price:"225000",
                    offer:"12",
                    rate:"5",
                    rateCount:"13",
                    intrested : false
                },
                {
                    id:79,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF4,
                    name:"لازانیا",
                    price:"280000",
                    offer:"16",
                    rate:"5",
                    rateCount:"19",
                    intrested : false
                },
                {
                    id:80,
                    title:"برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز",
                    image : IranianF3,
                    name:"سوپ پیاز",
                    price:"40000",
                    offer:"5",
                    rate:"5",
                    rateCount:"15",
                    intrested : false
                }
            ]
        ]
]

    return (
        <FoodContext.Provider value={{foods , menu}}>
            {children}
        </FoodContext.Provider>
    );

};

export default FoodContextProvider;