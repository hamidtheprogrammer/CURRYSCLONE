import React from "react";
import { footerService } from "../../constants";

const Footer = () => {
  return (
    <section className="w-[100%] mt-16">
      <div className="grid grid-cols-3 grid-rows-3 gap-8 text-black/80">
        {footerService.map((service) => (
          <div className="itemsCenter flex-col cursor-pointer">
            <i className="text-2xl">{service.icon}</i>
            <p className="text-sm">{service.name}</p>
          </div>
        ))}
      </div>
      <div className=" itemsCenter flex-col">
        <h1 className="text-sm font-bold text-black/80">About us</h1>
      </div>
    </section>
  );
};

export default Footer;
