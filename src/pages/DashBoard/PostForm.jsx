import React, { useState, useEffect } from "react";
import { createPost, editPost } from "../../api/post/post";
import MultiSelect from "./MultiSelect.jsx";
import { useLoading } from "../../contexts/LoadingProvider";

const TAGS_LIST = [
  "history",
  "american",
  "crime",
  "science",
  "fiction",
  "fantasy",
  "space",
  "adventure",
  "nature",
  "environment",
  "philosophy",
  "psychology",
  "health",
];

const PostForm = ({
  post,
  onPostFromCancel,
  getTotalPosts,
  setShowPostForm,
  setCurrentPost,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [errors, setErrors] = useState({});
  const { setLoading } = useLoading();

  const handleAddTag = (tag) => {
    if (!tags.includes(tag) && tags.length < 3) {
      setTags([...tags, tag]);
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    if (!body) newErrors.body = "Content is required";
    if (tags.length === 0) newErrors.tags = "At least one tag is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      setLoading(true);
      try {
        if (post) {
          await editPost(post.id, { title, body, tags });
        } else {
          await createPost({ title, body, tags });
        }
        setTitle("");
        setBody("");
        setTags([]);
        setErrors({});
        getTotalPosts();
        setCurrentPost();
        setShowPostForm(false);
      } catch (error) {
        console.error("Error creating post:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setTags(post.tags);
    }
  }, [post]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="w-[460px] h-[512px] bg-white shadow-lg rounded-lg px-[75.7px] py-[53.87px]">
        <h2 className="text-center text-[26px] mb-6">
          {post ? "Edit Post" : "Add A Post"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block text-[14px] font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-[#F8B959] rounded-full px-2 focus:outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-xs mt-1">{errors.title}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full border border-[#F8B959] rounded-lg px-2 h-20 focus:outline-none resize-none"
            />
            {errors.body && (
              <p className="text-red-500 text-xs mt-1">{errors.body}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tags</label>
            <MultiSelect
              options={TAGS_LIST}
              selectedOptions={tags}
              onAddTag={handleAddTag}
              onRemoveTag={handleRemoveTag}
              maxSelection={3}
            />
            {errors.tags && (
              <p className="text-red-500 text-xs mt-1">{errors.tags}</p>
            )}
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              type="button"
              onClick={onPostFromCancel}
              className="flex-1 py-2 bg-[#FDEACD] rounded-full text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-[#F8B959] rounded-full text-center"
            >
              {post ? "Edit" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
