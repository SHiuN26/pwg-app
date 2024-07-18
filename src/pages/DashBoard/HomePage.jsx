import React, { useState } from "react";
import PostCard from "./PostCard";
import PaginationBar from "./PaginationBar"; // 確保路徑大小寫正確
import { useNavigate } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Post Title",
    date: "2024-04-30",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ...",
    tags: ["History", "Crime", "American"],
  },
  // 其他的post數據
];

const DashBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen bg-[#e6e6e6] p-10">
      <div className="flex justify-between items-center mb-4 bg-[pink]">
        <button className="h-[18px] w-[94px] bg-[#F8B959] text-[8px] rounded-full font-normal">
          Add New Post
        </button>
        <button
          className="text-[#F95A50] text-[18px] font-normal"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center align-center w-full bg-green-100">
        <h1 className="text-center text-[18px] font-semibold mb-4">
          Post List
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <PaginationBar
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DashBoard;
