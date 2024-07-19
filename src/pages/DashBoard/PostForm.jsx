import React, { useState, useEffect } from "react";
import { createPost, editPost } from "../../api/post/post";
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
  const [showOptions, setShowOptions] = useState(false);

  const handleAddTag = (event) => {
    const value = event.target.value;
    if (!tags.includes(value) && tags.length < 3) {
      setTags([...tags, value]);
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
            <select
              defaultValue=""
              onFocus={() => setShowOptions(true)}
              onChange={handleAddTag}
              disabled={tags.length >= 3}
              className="w-full border border-[#F8B959] rounded-full px-3 focus:outline-none"
            >
              <option value="" disabled>
                {showOptions ? "Select a tag" : ""}
              </option>
              {showOptions &&
                TAGS_LIST.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
            </select>

            {tags.length > 0 && (
              <div className="flex flex-wrap mt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#F8B959] text-white text-xs px-2 py-1 rounded-full mr-2 mb-2"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1"
                    >
                      x
                    </button>
                  </span>
                ))}
              </div>
            )}
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
