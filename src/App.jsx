import SmoothScrolling from "./components/SmoothScrolling";
import Navbar from "./components/Navbar";
import HeroSection from "./section/HeroSection";
import CategorySection from "./section/CategorySection";
import DestinationSection from "./section/DestinationSection";
import BookingSection from "./section/BookingSection";
import TestimonialSection from "./section/TestimonialSection";
import NewsLetterSection from "./section/NewsLetterSection";
import FooterSection from "./section/FooterSection";

function App() {
  return (
    <SmoothScrolling>
      <main>
        <img src="/images/Decore.png" alt="" className="absolute top-0 right-0" />
        <div className="relative z-20 p-10 md:px-24 md:py-10 overflow-x-hidden">
          <Navbar />
          <HeroSection />
          <CategorySection />
          <DestinationSection />
          <BookingSection />
          <TestimonialSection />
          <NewsLetterSection />
          <FooterSection />
        </div>
      </main>
    </SmoothScrolling>
  );
}

export default App;