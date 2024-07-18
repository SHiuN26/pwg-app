import React from "react";

const CardButton = ({ children, className, onClick }) => (
  <button className={`rounded-full py-1 px-4 ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default CardButton;
