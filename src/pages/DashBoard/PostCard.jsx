import React from "react";
import CardButton from "./CardButton";
import CardTag from "./CardTag";

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-72">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-gray-500">{post.date}</span>
      <img src="path/to/logo.png" alt="Logo" className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
    <p className="text-gray-700 mb-4">{post.content}</p>
    <div className="flex flex-wrap mb-4">
      {post.tags.map((tag) => (
        <CardTag key={tag}>{tag}</CardTag>
      ))}
    </div>
    <div className="flex justify-between">
      <CardButton className="bg-[#F8B959] text-white">Edit</CardButton>
      <CardButton className="bg-[#E6A5A1] text-white">View</CardButton>
      <CardButton className="bg-[#F95A50] text-white">Delete</CardButton>
    </div>
  </div>
);

export default PostCard;
