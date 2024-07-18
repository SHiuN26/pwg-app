import React from "react";
import CardButton from "./CardButton";
import CardTag from "./CardTag";
import IconLogo from "../../components/icons/IconLogo";

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between align-center w-[230px] h-[245px]">
    <div className="flex justify-center items-center relative w-full">
      <div className="w-full text-[10px] text-[#F8B959] ">{post.date}</div>
      <div className="absolute top-[-20px] right-[-30px]">
        <IconLogo />
      </div>
    </div>

    <div className="flex justify-start items-center mt-4 mb-2 w-full">
      <div className="text-[14px] font-semibold">{post.title}</div>
    </div>

    <div className="flex flex-1 justify-center items-start">
      <p className="text-[12px] line-clamp-5">{post.body}</p>
    </div>

    <div>
      <div className="flex flex-wrap justify-start mb-2">
        {post.tags.map((tag) => (
          <div className="my-1 mr-2">
            <CardTag key={tag}>{tag}</CardTag>
          </div>
        ))}
      </div>
      <div className="flex justify-start space-x-3 text-[8px]">
        <CardButton className="bg-[#D9F7CF]">Edit</CardButton>
        <CardButton className="bg-[#F8B959]">View</CardButton>
        <CardButton className="bg-[#F95A50]">Delete</CardButton>
      </div>
    </div>
  </div>
);

export default PostCard;
