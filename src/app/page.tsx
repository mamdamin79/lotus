import { FeatureComponent } from "@/_components/FeatureSection/FeatureComponent";
import { HomeHeroSection } from "@/_components/HomeHeroSectioon/HomeHeroSection";
import { IntroductionSection } from "@/_components/introductionSection/IntroductionSection";
import { homeFeatures } from "@/data/home-feature";

export default function Home() {
  return (
      <>
        <HomeHeroSection/>
        <section className="container homeHeroSection">
          {
            homeFeatures.map(feature=><FeatureComponent key={feature.title} feature={feature}/>)
          }
        </section>
        <IntroductionSection/>
      </>

  );
}
