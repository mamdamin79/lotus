import React from "react";
import styles from "./Introduction.module.css";
import { FaArrowLeft } from "react-icons/fa";

export const IntroductionSection : React.FC = ()=>{
    return(
        <section className={`${styles.introSection}`}>
            <div className="container">
                <h2>با دیدن فیلم NEW را تجربه کند.</h2>
                <div className={styles.wrapper}>
                    <div className={styles.contentWrapper}>
                        <h3>
                            NEW ، یک مدل نوین هوش مصنوعی است که از روش های به روز یادگیری ماشین برای پیش بینی قیمت سنگ آهن و تحلیل بازار استفاده می کند.NEW ، همکار هوش مصنوعی شما است تا در توسعه و تغییر کسب و کارتان یاریتان کند.
                        </h3>
                        <div>
                            <p >
                                <FaArrowLeft fill="#1c39bb" size={50}/>
                                در این پروژه علاوه بر اینکه از روش های هوش مصنوعی، یادگیری ماشین و داده های پیشین قیمت سنگ آهن، در مدلسازی، از بیشن از 30 سال تجربه آقای دکتر کیوان جعفری طهرانی در تحلیل بازار و تجارت سنگ آهن برای پیش بینی رفتار بازار استفاده شد.
                            </p>
                            <p>
                                <FaArrowLeft fill="#1c39bb" size={20}/>
                               NEW خود را با تغییرات بازار به روز میکند تا شما را در مدیریت ریسک و یافتن فرصتهای تجاری یاری کند.
                            </p>
                            <p>
                                <FaArrowLeft fill="#1c39bb" size={20}/>
                                NEW احتمال هرگونه تغییرات ناگهانی بازار را به شما اطالع میدهد.
                            </p>
                        </div>
                    </div>
                    <div className={styles.videoWrapper}>
                        <video  controls>
                            <source src="../../../public/video/sample.mp4" type="video/mp4" />
                        </video>
                        <p>لطفا بر روی فیلم کلید نمایید.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}