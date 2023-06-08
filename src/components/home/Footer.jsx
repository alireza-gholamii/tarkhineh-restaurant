import React from 'react';

//image 
import telegram from "../../img/icons/telegram.svg"
import instagram from "../../img/icons/instagram.svg"
import twitter from "../../img/icons/twitter.svg"

const Footer = () => {
    return (
        <div>
            <div>
                <h5>دسترسی آسان</h5>
                <ul>
                    <li>پرسش‌های متداول</li>
                    <li>قوانین ترخینه</li>
                    <li>حریم خصوصی</li>
                    <li>
                        <img src={telegram} alt="telegram" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                    </li>
                </ul>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Footer;