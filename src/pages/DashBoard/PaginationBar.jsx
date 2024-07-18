import React from "react";

const PaginationBar = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center mt-10">
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        className={`w-7 h-7 bg-[#F8B959] mx-2 rounded-lg flex items-center justify-center  ${
          currentPage === index + 1 ? "bg-[#F8B959]" : "bg-[#FDEACD]"
        }`}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </button>
    ))}
  </div>
);

export default PaginationBar;
