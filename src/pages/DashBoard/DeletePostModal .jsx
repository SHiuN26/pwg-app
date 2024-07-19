import React from "react";

const DeletePostModal = ({ post, onCancel, onDelete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="w-[488px] h-[184px] bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-6 text-[15px]">
        <h2 className="text-[#F95A50] text-lg mb-2 ">{post.title}</h2>
        <p className="text-center mb-4">
          Are you sure you want to delete this post?
        </p>
        <div className="flex space-x-6">
          <button
            type="button"
            onClick={onCancel}
            className="bg-[#FDEACD] text-black py-2 px-12 rounded-full"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="bg-[#F95A50] text-white py-2 px-12 rounded-full"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePostModal;
