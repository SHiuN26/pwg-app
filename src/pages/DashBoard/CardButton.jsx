import React from "react";

const CardButton = ({ children, className, onClick }) => (
  <button className={`rounded-full px-4 py-2 ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default CardButton;
