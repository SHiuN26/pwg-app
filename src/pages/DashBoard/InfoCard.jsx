import React from "react";

const InfoCard = ({ title, num }) => {
  return (
    <div className="flex flex-col justify-around items-center bg-green-400 rounded-lg p-5 md:w-[230px] md:h-[127px] w-[90%] h-auto md:mb-14 mb-8">
      <div className="flex justify-center items-center w-full text-[18px]">
        {title}
      </div>
      <div className="flex justify-center items-center w-full text-[35px]">
        {num}
      </div>
    </div>
  );
};

export default InfoCard;
