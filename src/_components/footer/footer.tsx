import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";
import logo from "../../../public/logo.svg"
import Link from "next/link";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaCreativeCommonsShare } from "react-icons/fa6";


export const Footer : React.FC = ()=>{
    return(
        <footer style={{padding:"2rem"}} className={styles.footer}>
            <div className={`${styles.wrapper} container`}>
                <div >
                    <Image style={{color:"transparent",backgroundColor:"white",borderRadius:"1rem", padding:"1rem",borderTopRightRadius:"0",borderBottomRightRadius:"0"}} src={logo} width={140} height={64} alt=""/>
                    <p>
                        با NEW روند بازار پیش روی شماست، از آن برای بهبود تجارت خود استفاده کنید. NEW بهطور پیوسته داده های بازار را مورد تحلیل قرار میدهد تا نتایج به روز در اختیار شما قرارگیرد. همین الان شروع کنید!
                    </p>
                </div>
                <div>
                    <h4>صفحات ما</h4>
                    <Link href="/">سوالات شما</Link>
                    <Link href="/">درباره ی ما</Link>
                </div>
                <div>
                    <h4>ارتباط با ما</h4>
                    <TiSocialLinkedinCircular size={30}/>
                    <FaCreativeCommonsShare size={30}/>
                </div>
            </div>
        </footer>
    )
}