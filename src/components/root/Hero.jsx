import React from "react";

const Hero = () => {
  return (
    <section className="wrapper relative w-[100%]">
      <aside className="hero_header relative w-[100%] overflow-hidden">
        <div className="hero_header_slider relative w-[100%] flex justify-between bg-black/10 text-xs font-bold text-black/70 py-4 px-6 border-b-[2px] border-gray-500">
          <div>
            <span>🛍️</span>
            <h1>Discover Amazing Deals on Top-Quality Products!</h1>
          </div>
          <div>
            <span>🛒</span>
            <h1>Your Ultimate Destination for Affordable Shopping!</h1>
          </div>
          <div>
            <span>💵</span>
            <h1>Shop Smart, Save Big: Unbeatable Prices on All Items!</h1>
          </div>
          <div>
            <span>❤️</span>
            <h1>Find Everything You Love at Prices You’ll Love Even More!</h1>
          </div>
        </div>
      </aside>
      <header className="relative w-full bg-black h-[200px] overflow-hidden">
        <div className="banner  w-full h-full relative"></div>
        <div className="absolute w-full h-full top-0 left-0 bg-black/60"></div>
        <div className="text-center absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] text-white">
          <h1 className="font-bold text-7xl text-red-300">EPIC DEALS</h1>
          <p>Save Up to 30%</p>
        </div>
      </header>
    </section>
  );
};

export default Hero;
