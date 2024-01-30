/* eslint-disable react/prop-types */
import React from "react";
export default function ServiceCard({ item }) {
  const createJSX = (el) => React.createElement(el, { className: "w-28 h-28" });
  return (
    <section>
      <div
        className={`w-32 h-32 flex justify-center items-center ${item.color}`}
      >
        {createJSX(item.icon)}
      </div>
    </section>
  );
}
