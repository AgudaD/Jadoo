import Navbar from "./components/Navbar";
import HeroSection from "./section/HeroSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import DestinationSection from "./section/DestinationSection";
import BookingSection from "./section/BookingSection";
import TestimonialSection from "./section/TestimonialSection";
import CategorySection from "./section/CategorySection";
import NewsLetterSection from "./section/NewsLetterSection";
import FooterSection from "./section/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  });

  return (
    <main>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <img src="/images/Decore.png" alt="" className="absolute top-0 right-0" />

          <div className="relative z-20 px-24 py-10">
            <Navbar />
            <HeroSection />
            <CategorySection />
            <DestinationSection />
            <BookingSection />
            <TestimonialSection />
            <NewsLetterSection />
            <FooterSection />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
