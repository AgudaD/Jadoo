import React from "react";

const FooterSection = () => {
  return (
    <section className="mt-28 text-[#1E1F3D] flex items-start justify-between">
      <div className="space-y-8">
        <img src="/images/JadooFooter.svg" alt="" />
        <p className="max-w-[15rem]">Book your trip in minute, get full control for much longer.</p>
      </div>

      <div className="grid grid-cols-3 space-x-20 space-y-4 gap-2">
        <p className="font-bold text-black text-lg">Company</p>
        <p className="font-bold text-black text-lg">Contact</p>
        <p className="font-bold text-black text-lg">More</p>
        <p>About</p>
        <p>Help/FAQ</p>
        <p>AirlineFees</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Airline</p>
        <p>Mobile</p>
        <p>Affliliates</p>
        <p>Low fare tips</p>
      </div>

      <div className="text-center space-y-4">
        <div className="flex items-center gap-3">
            <img src="/images/facebook.svg" alt="" />
            <img src="/images/instagram.svg" alt="" />
            <img src="/images/twitter.svg" alt="" />
        </div>

        <h3 className="font-semibold text-lg">Discover our app</h3>

        <div className="flex items-center gap-3">
            <img src="/public/images/Google Play.svg" alt="" />
            <img src="/public/images/Play Store.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
