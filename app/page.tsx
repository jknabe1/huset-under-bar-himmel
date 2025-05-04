import AboutSection from "@/components/Landing/AboutSection";
import IntroSection from "@/components/Landing/IntroSection";
import OpeningSlider from "@/components/Landing/OpeningSlider";

export default function Home() {
  return (
    <div className="flex-global">
      <IntroSection />
      <OpeningSlider />
      <AboutSection />
    </div>
  );
}
