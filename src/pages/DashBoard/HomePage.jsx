import React, { useState } from "react";
import PostCard from "./PostCard";
import PaginationBar from "./PaginationBar"; // 確保路徑大小寫正確
import { useNavigate } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "His mother had always taught him",
    date: "2024-04-30",
    body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
    tags: ["environment", "philosophy", "nature"],
  },
  {
    id: 2,
    title: "The Mysterious Island",
    date: "2023-12-01",
    body: "The crew had survived the crash, but now they were stranded on a mysterious island with no way to contact the outside world.",
    tags: ["adventure", "nature", "science"],
  },
  {
    id: 3,
    title: "The Space Odyssey",
    date: "2024-01-15",
    body: "In the year 3000, humanity has colonized Mars, but the journey to the stars is just beginning.",
    tags: ["space", "science", "fiction"],
  },
  {
    id: 4,
    title: "The Enchanted Forest",
    date: "2023-11-22",
    body: "Deep within the enchanted forest, a hidden world of magic and wonder awaited those brave enough to explore.",
    tags: ["fantasy", "nature", "adventure"],
  },
  {
    id: 5,
    title: "A Crime in the Night",
    date: "2024-02-28",
    body: "The small town was shocked when a brutal crime was committed in the dead of night, and the search for the culprit began.",
    tags: ["crime", "american", "philosophy"],
  },
  {
    id: 6,
    title: "The Philosopher's Quest",
    date: "2024-03-10",
    body: "A young philosopher set out on a quest to find the meaning of life, encountering various challenges and wise mentors along the way.",
    tags: ["philosophy", "adventure", "history"],
  },
  {
    id: 7,
    title: "Journey to the Center of the Mind",
    date: "2023-10-05",
    body: "A groundbreaking experiment allows scientists to explore the human mind as never before, leading to startling discoveries.",
    tags: ["psychology", "science", "health"],
  },
  {
    id: 8,
    title: "The Last Frontier",
    date: "2024-06-18",
    body: "Space exploration has reached new heights, but the greatest challenge lies in the unknown regions beyond our solar system.",
    tags: ["space", "adventure", "fiction"],
  },
  {
    id: 9,
    title: "Nature's Fury",
    date: "2023-09-21",
    body: "A group of scientists must survive the wrath of nature as they study the effects of climate change on remote ecosystems.",
    tags: ["nature", "environment", "science"],
  },
];

const DashBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const postsPerPage = 9;
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
    <div className="flex justify-center items-center min-h-screen bg-[#D9D9D9] pt-6 pb-10">
      <div className="flex flex-col justify-start align-between">
        <div className="flex justify-between items-center mb-4">
          <button className="py-[8px] px-[20px] bg-[#F8B959] text-[8px] rounded-full font-normal hover:text-[#E6A5A1]">
            Add New Post
          </button>
          <button
            className="text-[#F95A50] text-[18px] font-normal hover:text-[#E6A5A1]"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="flex justify-center items-center w-full text-[18px] font-semibold mb-6">
          Post List
        </div>

        <div className="grid grid-cols-3 gap-8">
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
    </div>
  );
};

export default DashBoard;
