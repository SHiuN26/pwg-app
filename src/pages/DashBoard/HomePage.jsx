import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import PaginationBar from "./PaginationBar"; // 確保路徑大小寫正確
import ViewPost from "./ViewPost";
import { useNavigate } from "react-router-dom";
import { getAllPosts } from "../../api/post/post";
import { getMyPosts } from "../../api/post/post";
import PostForm from "./PostForm";

const DashBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPost, setCurrentPost] = useState(null);
  const [showPostForm, setShowPostForm] = useState(false);
  const navigate = useNavigate();

  const postsPerPage = 9;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const onPostFromCancel = () => {
    setShowPostForm(false);
    setCurrentPost(null);
  };

  const getTotalPosts = async () => {
    try {
      const response = await getMyPosts(currentPage, postsPerPage);
      console.log(response);
      setPosts(response.data);
      setCurrentPage(response.page);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.log("Get all posts failed", error);
    }
  };

  useEffect(() => {
    getTotalPosts();
  }, [currentPage]);

  return (
    <div className="flex justify-center items-start min-h-screen bg-[#D9D9D9] pt-6 pb-10">
      <div className="flex flex-col justify-start align-between">
        <div className="flex justify-between items-center mb-4">
          <button
            className="py-[8px] px-[20px] bg-[#F8B959] text-[8px] rounded-full font-normal hover:text-[#E6A5A1]"
            onClick={() =>
              currentPost ? setCurrentPost(null) : setShowPostForm(true)
            }
          >
            {currentPost ? "Back" : "Add New Post"}
          </button>
          <button
            className="text-[#F95A50] text-[18px] font-normal hover:text-[#E6A5A1]"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="flex justify-center items-center w-full text-[18px] font-semibold mb-6">
          {currentPost ? "View Post" : "Post List"}
        </div>

        {showPostForm && (
          <PostForm
            post={currentPost}
            onPostFromCancel={onPostFromCancel}
            setShowPostForm={setShowPostForm}
            getTotalPosts={getTotalPosts}
            setCurrentPost={setCurrentPost}
          />
        )}

        {currentPost && !showPostForm ? (
          <ViewPost
            currentPost={currentPost}
            className="w-[800px] h-[100vh] bg-green-400"
          />
        ) : (
          <div className="grid grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                currentPost={currentPost}
                setCurrentPost={setCurrentPost}
                getTotalPosts={getTotalPosts}
                setShowPostForm={setShowPostForm}
              />
            ))}
          </div>
        )}

        {currentPost ? null : (
          <PaginationBar
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default DashBoard;
