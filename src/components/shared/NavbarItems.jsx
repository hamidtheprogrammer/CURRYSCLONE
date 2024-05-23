import React from "react";
import { navItems } from "../../constants";

const NavbarItems = ({ style }) => {
  return (
    <ul className={`${style}`}>
      {navItems.map((item) => (
        <a key={item.name} href={item.href}>
          <li className="hover:opacity-[0.7]" key={item.name}>
            {item.name}
          </li>
        </a>
      ))}
    </ul>
  );
};

export default NavbarItems;
