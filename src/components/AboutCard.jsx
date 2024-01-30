/* eslint-disable react/prop-types */
import React from "react";
import { Card } from "flowbite-react";

export default function AboutCard({ item }) {
  const createjsx = (el) => React.createElement(el);
  return (
    <article>
      <Card className={`${item[0].color ? item.color : "max-w-sm"} `}>
        <div className="space-y-2">
          <div className={`flex items-center`}>
            <span className="text-2xl dark:text-white mr-3">
              {item[0].description ? createjsx(item[0].icon) : ""}
            </span>
            <h3 className="dark:text-white text-xl font-semibold">
              {item[0].title}
            </h3>
          </div>
          <p className="leading-8 whitespace-break-spaces break-words text-gray-lite  dark:text-[#A6A6A6]">
            {item[0].description ? item[0].description : item[0].icon}
          </p>
        </div>
      </Card>
    </article>
  );
}
