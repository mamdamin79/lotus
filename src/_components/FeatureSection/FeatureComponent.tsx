import type { Feature } from "@/types/Feature";
import Image from "next/image";
import React from "react";
import { FeatureComponentProps } from "./FeatureCompponent.type";
import styles from "./feature.module.css"

export const FeatureComponent : React.FC<FeatureComponentProps> = ({
    feature : {icon,title,description}
})=>{
    return(
        <article className={styles.feature}>
            <Image  src={icon} width={52} height={52} alt="" />
            <h4 >{title}</h4>
            <p >{description}</p>
        </article>
    )
}