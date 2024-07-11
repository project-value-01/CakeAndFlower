import React from "react";
import { contect_Address } from "./data";

const ContactAddress = () => {
  return (
    <div className="w-full px-2 mx-auto">
      <h1>OUR PATERNER PORTALS</h1>
      <div className="pt-2">
        <hr className="w-1/2 bg-slate-900 h-[3px]" />
        <hr className="w-full bg-slate-800 h-[1px]" />
      </div>
      <div>
        <div className="grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-4 py-4">
          {contect_Address.map((address) => (
            <div
              key={address.id}
              className="border-[1px] border-amber-200 overflow-hidden m-[1px] hover:scale-95 transition-all"
            >
              <img src={address.poster} className="min-w-[150px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
