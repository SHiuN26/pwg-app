import React, { useState, useEffect, useContext } from "react";
import PostCard from "./PostCard";
import PaginationBar from "./PaginationBar"; // 確保路徑大小寫正確
import ViewPost from "./ViewPost";
import { useNavigate } from "react-router-dom";
import { getAllPosts, getMyPosts } from "../../api/post/post";
import { getAllAccounts } from "../../api/account/account";
import PostForm from "./PostForm";
import InfoCard from "./InfoCard";

const DashBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPost, setCurrentPost] = useState(null);
  const [showPostForm, setShowPostForm] = useState(false);
  const [MyPosts, setMyPosts] = useState();
  const [allAccounts, setAllAccounts] = useState();
  const [totalPosts, setTotalPosts] = useState();

  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const postsPerPage = role === "user" ? 9 : 6;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
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
      if (role === "user") {
        const response = await getMyPosts(currentPage, postsPerPage);
        const formattedPosts = response.data.map((post) => ({
          ...post,
          date: formatDate(post.date),
        }));
        console.log(response);
        setPosts(formattedPosts);
        setCurrentPage(response.page);
        setTotalPages(response.totalPages);
      } else if (role === "admin") {
        const response = await getAllPosts(currentPage, postsPerPage);
        const allAccounts = await getAllAccounts();
        const allMyPosts = await getMyPosts(currentPage, postsPerPage);
        const formattedPosts = response.data.map((post) => ({
          ...post,
          date: formatDate(post.date),
        }));
        setPosts(formattedPosts);
        setCurrentPage(response.page);
        setTotalPages(response.totalPages);
        setTotalPosts(response.totalPosts);
        setMyPosts(allMyPosts.totalPosts);
        setAllAccounts(allAccounts.accounts.length);
      }
    } catch (error) {
      console.log("Get all posts failed", error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
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

        {role === "admin" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            <InfoCard
              key="totalCount"
              title={"Total Acount"}
              num={allAccounts}
            />
            <InfoCard key="totalPost" title={"Total Post"} num={totalPosts} />
            <InfoCard key="myPost" title={"My Post"} num={MyPosts} />
          </div>
        ) : null}

        {currentPost && !showPostForm ? (
          <ViewPost
            currentPost={currentPost}
            className="w-[800px] h-[100vh] bg-green-400"
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard
                key={post.id + post.title}
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
