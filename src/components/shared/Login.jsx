    import React, { useContext, useState } from 'react';
import AuthCode from 'react-auth-code-input';

//img
import logoP1 from "/assets/img/icons/logoP1.svg"
import fullLogo from "/assets/img/icons/fullLogo.svg"
import close from "/assets/img/icons/Closeicon.svg"

const Login = ({ isLoginVisible , visibleClose }) => {
    
    const [number , setNumber] = useState("");
    
    const [submitedNum , setSubmitedNum] = useState(false)

    if(! isLoginVisible) return null;

    const closeHandler = (e) => {
        if(e.target.id === 'wrapper') visibleClose();
    }
    
    
    return (
        <>
        <div 
            id="wrapper"
            onClick={closeHandler}
            className='fixed cursor-context-menu flex items-center justify-center duration-500 inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-20'>
            {
                submitedNum ?
                    <InterCode setSubmitedNum={setSubmitedNum} submitedNum={submitedNum} number={number} setNumber={setNumber} visibleClose={visibleClose}/>
                        :
                    <InterNumber setSubmitedNum={setSubmitedNum} submitedNum={submitedNum} number={number} setNumber={setNumber} visibleClose={visibleClose}/>
            }
        </div>
        </>
    );
};
const InterNumber = ({number , setNumber , visibleClose , setSubmitedNum }) => {
    const submitButton = () => {
        return number.split("").length == "11"
            ? "bg-green-primary text-white" 
            :"bg-[#EDEDED] text-[#CBCBCB] cursor-not-allowed"
    
    }

    const submitHandler = () => {
        number.split("").length == "11" ?
        setSubmitedNum(true)
        :
        setSubmitedNum(false)
    }
    
    return(
            <div className='p-6 gap-3 flex flex-col bg-white rounded-lg justify-around w-[392px] h-[302px]'>
                <div className='flex  justify-between items-center'>
                    <div></div>
                    <div>
                        <img className='block md:hidden' src={logoP1} alt="logo" />
                        <img className='hidden md:block' src={fullLogo} alt="logo" />
                    </div>
                    <div className='cursor-pointer' onClick={() => visibleClose()}>
                        <img className='w-6' src={close} alt="close" />
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center gap-5'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-base'>ورود / ثبت ‌نام</span>
                        <span className='text-xs text-[#717171] whitespace-nowrap'>با وارد کردن شماره موبایل کد تاییدی برای شما ارسال خواهد شد.</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='flex flex-col w-[344px] h-14'>
                            <label className='text-xs bg-white'>شماره همراه</label>
                            <input onChange={(e) => setNumber(e.target.value)} value={number} className='border rounded-md border-[#353535] w-full h-10' type="number" />
                        </div>
                        <button onClick={() => submitHandler()} className={`w-[344px] h-10 rounded font-medium ${submitButton()}`}>ادامه</button>
                        <span className='text-xs whitespace-nowrap'>ورود و عضویت در ترخینه به منزله قبول <span className='cursor-pointer text-bg-primary'>قوانین و مقررات</span> است.</span>
                    </div>
                </div>
            </div>            
    )
}

const InterCode = ({number  , setSubmitedNum , visibleClose }) => {
    

    const [code , setCode] = useState("");

    const submitButton = () => {
        return code.split("").length == 5 
            ? "bg-green-primary text-white" 
            :"bg-[#EDEDED] text-[#CBCBCB] cursor-not-allowed"
    
    }

    return (
        <div className='p-6 gap-3 flex flex-col bg-white rounded-lg justify-around w-[392px] h-[302px]'>
            <div className='flex  justify-between items-center'>
                <div></div>
                <div>
                    <img className='block md:hidden' src={logoP1} alt="logo" />
                    <img className='hidden md:block' src={fullLogo} alt="logo" />
                </div>
                <div className='cursor-pointer' onClick={() => visibleClose()}>
                    <img className='w-6' src={close} alt="close" />
                </div>
            </div>
            <div className='flex flex-col justify-between items-center gap-5'>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-base'>کد تایید</span>
                        <span className='text-xs text-[#717171] whitespace-nowrap'> کد تایید پنج‌رقمی به شماره{number}ارسال شد.</span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <div className='flex flex-col w-[344px]'>
                            <AuthCode
                                onChange={e => setCode(e)}
                                length={5}
                                allowedCharacters="numeric"
                                inputClassName="input"
                                containerClassName="container"
                            />
                            <div className="text-xs flex justify-between">
                                <span>الکی یچیزی بزن</span>
                                <span onClick={() => setSubmitedNum("")} className='text-bg-primary'>ویرایش شماره</span>
                            </div>
                        </div>
                        <button
                            onClick={() => visibleClose()} 
                            className={`w-[344px] h-10 rounded font-medium ${submitButton()}`}>ثبت کد</button>
                </div>
            </div>
        </div>
    )
}

export default Login;