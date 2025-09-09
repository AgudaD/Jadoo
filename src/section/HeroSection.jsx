import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const HeroSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-text", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.fromTo(
      titleSplit.chars,
      {
        yPercent: -50,
        opacity: 0,
        ease: "power1.out",
      },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.05,
        ease: "power1.inOut",
      }
    ).fromTo(".hero-clip", {
        clipPath:"polygon(50% 0, 50% 0, 50% 100%, 50% 100%)"
    }, {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.out",
    }).fromTo(".right-plane, .left-plane",{
        xPercent: -100,
        opacity: 0,
        overflowX: "hidden"
    }, {
        xPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
    })
  });

  return (
    <section className="flex items-center justify-between mt-10 font-semibold">
      <div className="max-w-[556px] space-y-8">
        <h2 className="text-[#DF6951] font-bold text-2xl hero-text">
          Best Destinations around the world
        </h2>

        <div
          style={{
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          className="hero-clip"
        >
          <h1 className="text-[#1E1F3D] text-[5rem] font-bold leading-18">
            Travel, enjoy and live a new and full life
          </h1>
        </div>
        <p className="text-[#5E6282]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className="flex items-center gap-12 mt-5">
          <button className="bg-yellow-500 rounded-md px-6 py-3 text-white">
            Find out more
          </button>
          <div className="flex items-center gap-3">
            <div>
              <img src="/Play button.svg" alt="" className="w-10" />
            </div>
            <p className="text-[#686D77]">Play Demo</p>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="relative hero-images">
        <img src="/Traveller 1.svg" alt="" className="relative z-50" />
        <img src="/plane.png" alt="" className="absolute top-10 left-0 left-plane" />
        <img src="/plane.png" alt="" className="absolute top-16 right-0 right-plane" />
      </div>
    </section>
  );
};

export default HeroSection;
