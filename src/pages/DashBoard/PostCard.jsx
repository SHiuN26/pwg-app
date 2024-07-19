import React, { useState } from "react";
import CardButton from "./CardButton";
import CardTag from "./CardTag";
import IconLogo from "../../components/icons/IconLogo";
import { deletePost } from "../../api/post/post";
import DeletePostModal from "./DeletePostModal ";
import { useLoading } from "../../contexts/LoadingProvider";

const PostCard = ({ post, setCurrentPost, getTotalPosts, setShowPostForm }) => {
  const [showModal, setShowModal] = useState(false);
  const { setLoading } = useLoading();
  const handleView = () => setCurrentPost(post);

  const handleCancel = () => {
    setShowModal(false);
  };

  const clickDelete = () => {
    setShowModal(true);
  };

  const handleEdit = () => {
    setCurrentPost(post);
    setShowPostForm(true);
  };

  const handleDelete = async () => {
    setLoading(true);
    setShowModal(false);
    try {
      await deletePost(post.id);
      setCurrentPost(null);
      getTotalPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center bg-white shadow-lg rounded-lg p-5  w-[230px] h-[245px]">
      <div className="flex justify-center items-center relative w-full">
        <div className="w-full text-[8px] text-[#F8B959] ">{post.date}</div>
        <div className="absolute top-[-15px] right-[-23px]">
          <IconLogo />
        </div>
      </div>

      <div className="flex justify-start items-center my-3 w-full">
        <div className="text-[14px] font-semibold line-clamp-1">
          {post.title}
        </div>
      </div>

      <div className="flex items-start flex-1 self-start">
        <p className="text-[12px] line-clamp-5 leading-[14.52px] break-all">
          {post.body}
        </p>
      </div>

      <div className="flex flex-col justify-end item-center mt-2 flex-1">
        <div className="flex flex-nowrap justify-start items-center">
          {post.tags.map((tag) => (
            <div className="mr-2" key={tag}>
              <CardTag>{tag}</CardTag>
            </div>
          ))}
        </div>
        <div className="flex justify-start space-x-3 text-[8px] mt-5">
          <CardButton className="bg-[#D9F7CF]" onClick={handleEdit}>
            Edit
          </CardButton>
          <CardButton className="bg-[#F8B959]" onClick={handleView}>
            View
          </CardButton>
          <CardButton className="bg-[#F95A50]" onClick={clickDelete}>
            Delete
          </CardButton>
        </div>
      </div>
      {showModal && (
        <DeletePostModal
          postTitle="Post Title"
          onCancel={handleCancel}
          onDelete={handleDelete}
          post={post}
        />
      )}
    </div>
  );
};

export default PostCard;
