import React, { useState } from "react";
import { about, footerService } from "../../constants";

const Footer = () => {
  const [aboutUs, setAboutUs] = useState(about);

  const handleCollapse = (idx) => {
    setAboutUs((prevAboutUs) =>
      prevAboutUs.map((e, index) => {
        return index === idx ? { ...e, isOpen: !e.isOpen } : e;
      })
    );
  };
  return (
    <section className="w-[100%] mt-16">
      <div className="grid grid-cols-3 grid-rows-3 gap-8 text-black/80">
        {footerService.map((service) => (
          <div
            key={service.name}
            className="itemsCenter flex-col cursor-pointer"
          >
            <i className="text-2xl">{service.icon}</i>
            <p className="text-sm">{service.name}</p>
          </div>
        ))}
      </div>
      <div className=" flex w-[100%] flex-col">
        {aboutUs.map((abt, idx) => (
          <div
            key={abt.name}
            onClick={() => {
              handleCollapse(idx);
            }}
            className="border-b-[1px] py-5 px-10 cursor-pointer"
          >
            <h1 className="text-sm font-[600] text-black/70">{abt.name}</h1>
            {abt.isOpen && (
              <p className="text-sm pt-4 text-black/70">{abt.content}</p>
            )}
          </div>
        ))}
      </div>
      <aside className="w-[100%] flxCenter gap-6 text-2xl mt-16">
        <i className="fa-brands fa-youtube">Y</i>
        <i className="fa-brands fa-twitter">T</i>
        <i className="fa-brands fa-instagram">I</i>
        <i className="fa-brands fa-facebook">F</i>
      </aside>
      <footer className="flxCenter text-xs text-black/70   mt-10 w-[100%} ">
        <p className="max-w-[300px] text-center">
          Sure! Here's a sample footer address for your TechMart website:
          TechMart Headquarters 123 Innovation Drive Tech City, TC 56789 Phone:
          (123) 456-7890 Email: support@techmart.com
        </p>
      </footer>
    </section>
  );
};

export default Footer;
