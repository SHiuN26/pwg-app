import React from "react";

const CardTag = ({ children }) => (
  <div className="flex justify-center items-center">
    <span className="bg-[#F8B9594D] rounded-full px-[9px] py-[5px] text-[8px] opacity-70 text-opacity-100">
      {children}
    </span>
  </div>
);

export default CardTag;
