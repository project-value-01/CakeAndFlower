import React from "react";
import { businessDetail } from "../data.js";

const AboutBussiness = () => {
  return (
    <div className="w-full text-wrap text-slate-900 text-[15px] py-5 font-medium">
      <h1 className="text-gray-800 text-2xl font-semibold leading-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit adipisicing
        elit.
      </h1>

      <p className="py-2">{businessDetail.p1}</p>
      <p className="py-2">{businessDetail.p2}</p>
      <p className="py-2">{businessDetail.p3}</p>
      <p className="py-2">{businessDetail.p4}</p>
      <p className="py-2">{businessDetail.p3}</p>

      <a className="text-gray-700 text-2xl hover:underline hover:text-blue-950 transition-all pt-5">Send the gifts for christmus</a>
      <p className="py-2">{businessDetail.p4}</p>
      <p className="py-2">{businessDetail.p1}</p>
    </div>
  );
};

export default AboutBussiness;
