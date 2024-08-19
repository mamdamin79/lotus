import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg"
import styles from "./header.module.css"

export const Header : React.FC = ()=>{
    return(
        <header className={styles.header}>
            <div className="container">
                <Image style={{rotate:"revert",color:"transparent",backgroundColor:"white",borderRadius:"1rem", padding:"5px",borderTopRightRadius:"0",borderTopLeftRadius:"0"}} src={logo} width={140} height={64} alt=""/>
                <div className={styles.buttonWrapper}>
                    <button className={styles.secondary}>ورود</button>
                    <button className={styles.primary}>ثبت نام</button>
                </div>
            </div>
        </header>
    )
}