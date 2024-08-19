import Image from "next/image"
import styles from "./HomeHero.module.css"
import trade from "../../../public/trade2.png"

export const HomeHeroSection : React.FC = ()=>{
    return(
        <section className={`${styles.hero}`}>
            <div className={`container ${styles.content}`}>
                <div>
                  <div className={styles.wrapper}>
                    <h1 className={styles.title}>آینده بازار مواد معدنی اینجا با</h1>
                    <p className={`${styles.brand} ${styles.slidetext}`}><strong>New</strong> is New</p>
                  </div>
                  <p className={styles.subtitle}>با NEW روند بازار پیش روی شماست، از آن برای بهبود تجارت خود استفاده کنید. NEW به طور پیوسته داده های بازار را مورد تحلیل قرار می دهد تا نتایج به روز در اختیار شما قرارگیرد.</p>
                  <p className={styles.callToaction}>همین الان شروع کنید !</p>
                </div>
            </div>
              <Image src={trade} height={560} width={270} alt=""/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#14161B" viewBox="0 0 1440 320"><path  fillOpacity="1" d="M0,256L48,224C96,192,192,128,288,96C384,64,480,64,576,85.3C672,107,768,149,864,181.3C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </section>
    )
}