import React, { useState } from "react";
import { table } from "./data";

const TableComponent = () => {
  const highlightText = (text) => {
    // Example function to highlight specific parts of text in a table cell
    const parts = text.split(" ");
    return (
      <span>
        {parts[0]}
        <span className="font-bold"> {parts[1]}</span>
      </span>
    );
  };

  return (
    <div className="overflow-x-auto w-full border-gray-200 text-center py-5 md:pb-14">
      <table className="bg-white w-full overflow-scroll text-[13px]  min-w-[500px] border-slate-300 border-[1px]">
        <thead>
          <tr className="text-[18px]">
            <th className="py-2 px-4 border-slate-300 border-[1px]">
              {table.heading[0].text}
            </th>
            <th className="py-2 px-4 border-slate-300 border-[1px]">
              {table.heading[1].text}
            </th>
            <th className="py-2 px-4 border-slate-300 border-[1px]">
              {table.heading[2].text}
            </th>
          </tr>
        </thead>
        <tbody>
          {table.data.map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 1 ? "bg-slate-200 border-slate-600" : ""}
            >
              <td className="py-2 px-4 border-slate-300 border-[1px] hover:underline hover:text-blue-950">
                <a href="#">{highlightText(item.td1)}</a>
              </td>
              <td className="py-2 px-4 border-slate-300 border-[1px] hover:underline hover:text-blue-950">
                <a href="#">{highlightText(item.td2)}</a>
              </td>
              <td className="py-2 px-4 border-slate-300 border-[1px] hover:underline hover:text-blue-950">
                <a href="#">{highlightText(item.td3)}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
