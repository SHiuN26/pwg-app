import React from "react";
import CardButton from "./CardButton";

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-10">
    {Array.from({ length: totalPages }, (_, index) => (
      <CardButton
        key={index}
        className={`bg-[#F8B959] text-white mx-2 ${
          currentPage === index + 1 ? "bg-[#F8B959]" : "bg-[#FDEACD]"
        }`}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </CardButton>
    ))}
  </div>
);

export default PaginationBar;
