import AboutSection from "@/components/Landing/AboutSection";
import TextSection from "@/components/Landing/Intro/TextSection";
import OpeningSlider from "@/components/Landing/OpeningSlider";
import VideoSection from "@/components/Landing/Intro/VideoSection";
import EventSection from "@/components/Landing/EventSection";

export default function Home() {
  return (
    <div className="flex-global">
      <div className="flex flex-col gap-8 md:gap-20">
        <VideoSection />
        <TextSection />
      </div>
      <OpeningSlider />
      <AboutSection />
      <EventSection />
    </div>
  );
}
