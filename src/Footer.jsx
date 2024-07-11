import React from "react";
import { Need_Help, Quick_Links, Useful_Links } from "./data";
import { ArrowBigLeftDash, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full bg-green-800 object-center relative">
      <h1 className="text-3xl font-mono font-light italic text-white p-4">
        Project-Value.com
      </h1>
      <div className="px-4 space-y-3 py-5 text-[13px] grid sm:grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 lg:place-items-center sm:text-[14px] md:text-[16px] lg:text-[17px] place-items-baseline justify-start">
        <div>
          <h1 className="text-xl text-white font-semibold uppercase">
            Quick Links
          </h1>
          <ul className="text-white space-y-2 font-thin">
            {Quick_Links.map((link) => (
              <li key={link?.id} className="flex gap-1 items-center ml-3 mt-5">
                <ChevronRight className="size-5" />
                {link.textContent}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-white font-semibold uppercase">
            Usefull links
          </h1>
          <ul className="text-white space-y-2 font-thin">
            {Useful_Links.map((link) => (
              <li key={link?.id} className="flex gap-1 items-center ml-3 mt-5">
                <ChevronRight className="size-5" />
                {link.textContent}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-white font-semibold uppercase">
            Need Help
          </h1>
          <ul className="text-white space-y-2 font-thin">
            {Need_Help.map((link) => (
              <li key={link?.id} className="flex gap-1 items-center ml-3 mt-5">
                <ChevronRight className="size-5" />
                {link.textContent}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-xl text-white font-semibold uppercase">
            We Accept
          </h1>
          <img className="pt-3" src="./images/visa_card.jpg" />
        </div>
      </div>
      <div className="w-full p-4 md:flex md:items-center md:justify-between bg-green-950">
        <p className="text-gray-400 text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
          © 2024 Project-Value All Rights Reserved.
        </p>
        <div className="text-center text-white text-xs mt-2 sm:text-[14px] md:text-[16px] lg:text-[18px]">
          <p>
            Designed & Developed By :
            <a href="https://github.com/project-value-01/CakeAndFlower" className="font-semibold underline px-2"> Project-Value</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
