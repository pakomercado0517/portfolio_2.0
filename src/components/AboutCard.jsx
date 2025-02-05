/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "flowbite-react";

export default function AboutCard({ item }) {
  const createjsx = (el) => React.createElement(el);
  return (
    <article>
      <Card
        className={`${item[0].color ? item.color : "max-w-sm"} bg-[#F3F6F6] dark:bg-[#1D1D1D]`}
      >
        <div className="space-y-2">
          <div className={`flex items-center`}>
            <span className="mr-3 text-2xl dark:text-white">
              {item[0].description ? createjsx(item[0].icon) : ""}
            </span>
            <h3 className="text-xl font-semibold dark:text-white">
              {item[0].title}
            </h3>
          </div>
          <p className="text-gray-lite whitespace-break-spaces break-words leading-8  dark:text-[#A6A6A6]">
            {item[0].description ? item[0].description : item[0].icon}
          </p>
        </div>
      </Card>
    </article>
  );
}
