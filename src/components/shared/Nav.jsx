import React, { useEffect, useState } from "react";
import NavbarItems from "./NavbarItems";
import { Link } from "react-router-dom";

const Nav = () => {
  const [sideNav, setSideNav] = useState(false);

  useEffect(() => {
    const sideNavigation = document.querySelector(`.sideNav`);
    sideNav
      ? sideNavigation.classList.add(`active`)
      : sideNavigation.classList.remove(`active`);
  }, [sideNav]);

  return (
    <header className="wrapper flex justify-between items-center w-[100%] max-sm:px-2 max-sm:py-1 px-6 py-4 relative border-b-[2px] border-gray-300">
      <Link
        id="Logo"
        className="poppins font-bold text-md text-white text-center h-[5rem] w-[5rem] primaryCol flxCenter items-center rounded-[999px]"
        to={"/"}
      >
        Not Currys
      </Link>
      <div className="flex items-center w-[40vw] relative">
        <input
          type="text"
          className="border-gray-500 border-[2px] w-full h-[2.4rem] px-5 rounded-full hover:cursor-pointer focus:border-red-500"
          placeholder="Search Our Products, brands & services"
        />
        <p className="absolute right-[1%] text-4xl text-white cursor-pointer  primaryCol rounded-[999px] w-[2rem] h-[2rem] flxCenter items-center">
          ⌕
        </p>
      </div>
      <nav className="max-md:hidden">
        <NavbarItems style={"flex gap-5"} />
      </nav>
      <div
        onClick={() => {
          setSideNav((prevSideNav) => (prevSideNav = !prevSideNav));
        }}
        id="hamburger"
        className="relative z-[999] cursor-pointer text-2xl w-[2rem] h-[2rem] md:hidden"
      >
        {!sideNav ? "☰" : "x"}
      </div>
      <nav className="sideNav translate-x-[100%] fixed top-0 h-[100vh] z-10 bg-white right-0  md:hidden">
        <NavbarItems
          style={"relative top-[9%] flex flex-col gap-5 pl-5  w-[50vw]"}
        />
      </nav>
    </header>
  );
};

export default Nav;
