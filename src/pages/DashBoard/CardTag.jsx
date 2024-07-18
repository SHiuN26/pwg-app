import React from "react";

const CardTag = ({ children }) => (
  <div className="flex justify-center align-center">
    <span className="bg-[#F8B9594D] rounded-full px-3 py-1 text-[8px] opacity-70 text-opacity-100 text-black/100">
      {children}
    </span>
  </div>
);

export default CardTag;
