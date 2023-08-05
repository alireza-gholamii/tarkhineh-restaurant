import React, { useContext, useEffect, useState } from 'react';

//img
import spider from "/public/assets/img/icons/spider.jpg"
import rightArrow from "/public/assets/img/icons/arrow-right-black.svg"
import grCart from "/public/assets/img/icons/grCart.svg"
import userData from "/public/assets/img/icons/userData.svg"
import trash from "/public/assets/img/icons/trashBlack.svg";
import wallet from "/public/assets/img/icons/wallet.svg"
import grWallet from "/public/assets/img/icons/grWallet.svg"

//context
import { CartContext } from '../contexts/CartContextProvider';

//food comopenet

import CartFoodComponent from './CartFoodComponent';
import { Link } from 'react-router-dom';
import Login from '../shared/Login';
import RemoveAll from './RemoveAll';
import CartBox from './CartBox';

const Cart = () => {

    useEffect(
        () => {
            dispatch({type:"MOUNTING"})
        }
        ,[]
    )

    const {state , dispatch} = useContext(CartContext);
    const {selectedItems , itemsCounter , total , checkout} = state;
    return (
        <div className='relative h-full pb-5'>
            {
                !itemsCounter ?
                <EmptyCart />
                :
                <FullCart state={state}/>
            }
        </div>
    );
};

const FullCart = ({state}) => {
    const [showClearModal , setShowClearModal] = useState(false);
    const [showLoginModal , setShowLoginModal] = useState(false)
    const {statee , dispatch} = useContext(CartContext);
    const {selectedItems , itemsCounter , total , checkout} = state;
    
    return(
       <div className='flex sm:h-full h-[69vh] w-full max-w-[1440px] flex-col justify-around md:justify-center md:items-center'>
            <div className='hidden m-[30px_auto] md:flex gap-1 justify-between items-center'>
                <div className='flex'>
                    <img src={grCart} alt="cart" />
                    <span className='font-bold text-bg-primary'>سبد خرید</span>
                </div>
                <span className='text-xs text-bg-primary font-bold'>----------------------</span>
                <div className='flex'>
                    <img src={userData} alt="confrim" />
                    <span className='text-xs'>تکمیل اطلاعات</span>
                </div>
                <span className='text-xs text-black'>----------------------</span>
                <div className='flex'>
                    <img src={wallet} alt="checkOut" />
                    <span>پرداخت</span>
                </div>
            </div>
            <div className='flex justify-around items-center md:hidden'>
                <img className='' src={rightArrow} alt="back" />
                <span className='font-bold'>سبد خرید</span>
                <img src={trash} alt="delete" />
            </div>
            <div>
            <div className='flex h-[50vh] sm:h-[70vh] flex-col md:flex-row justify-between items-center md:items-start gap-x-6'>
                    <div className='h-[70vh] overflow-y-scroll scroll flex flex-col md:gap-4 border rounded sm:rounded-lg p-1 w-[80vw] md:w-[50vw] max-w-[704px] md:p-5 border-[#CBCBCB]'>
                            {
                                selectedItems.map(
                                    (item , index) => <CartFoodComponent foodData={item} key={index}/>
                                )
                            }   
                    </div>
                    <CartBox setShowClearModal={setShowClearModal} itemsCounter={itemsCounter} total={total} />
                </div>
            </div>
            <Login isLoginVisible={showLoginModal} visibleClose={() => setShowLoginModal(false)} />
            <RemoveAll isVisible={showClearModal} onClose={() => setShowClearModal(false)}/>
       </div>
    );
}

const EmptyCart = () => {
    return(
        <div className='flex flex-col justify-around items-center w-full h-[83vh]'>
            <div className='flex justify-center items-center w-[90vw] h-[422px] rounded-lg border border-[#CBCBCB]' 
                style={{background:`url(${spider})`,backgroundRepeat:"no-repeat" , backgroundSize:"contain" , backgroundPosition:"50% 50%"}}>
                <div className='flex gap-8 flex-col justify-between items-center'>
                    <span className='text-xl'>شما درحال حاضر هیچ سفارشی ثبت نکرده اید!</span>
                    <Link to="/" className='flex items-center justify-center w-[184px] h-10 text-base font-medium text-bg-primary border border-[#417F56] rounded'>منوی رستوران</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;