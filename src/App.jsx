import Navbar from "./components/Navbar";
import HeroSection from "./section/HeroSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Category from "./section/Category";

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
          <img src="/Decore.png" alt="" className="absolute top-0 right-0" />

          <div className="relative z-20 px-24 py-10">
            <Navbar />
            <HeroSection />
            <Category />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
