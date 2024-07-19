// import React, { useState, useEffect } from "react";
// import { viewPost } from "../../api/post/post";

// const ViewPost = ({ currentPost }) => {
//   const [currView, setCurrView] = useState(null);

//   const getViewsPost = async () => {
//     try {
//       const response = await viewPost(currentPost.id);
//       setCurrView(response);
//     } catch (error) {
//       console.log("Get all posts failed", error);
//     }
//   };

//   useEffect(() => {
//     getViewsPost();
//   }, []);

//   return (
//     <div className="flex flex-col justify-start items-center p-6 md:p-12 bg-white w-full max-w-2xl md:w-[729px] h-auto md:h-[291px] rounded-xl">
//       <div className="flex justify-start items-center w-full text-lg md:text-[16px] font-semibold my-4 md:my-6">
//         {currView?.title}
//       </div>

//       <div className="flex justify-start items-center w-full text-sm md:text-[12px] font-normal">
//         {currView?.body}
//       </div>

//       <div className="flex flex-1 justify-start items-end w-full mt-4 md:mt-0">
//         {currView?.tags?.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-[#F8B9594D] rounded-full px-2 py-1 md:px-[9px] md:py-[5px] text-xs md:text-[8px] opacity-70 text-opacity-100 mr-2"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewPost;

import React, { useState, useEffect } from "react";
import { viewPost } from "../../api/post/post";

const ViewPost = ({ currentPost }) => {
  const [currView, setCurrView] = useState(null);

  const getViewsPost = async () => {
    try {
      const response = await viewPost(currentPost.id);
      setCurrView(response);
    } catch (error) {
      console.log("Get all posts failed", error);
    }
  };

  useEffect(() => {
    getViewsPost();
  }, [currentPost]);

  return (
    <div className="flex flex-col justify-start items-center p-6 md:p-12 bg-white w-[230px] h-[245px] md:w-full md:max-w-full lg:max-w-4xl md:h-auto rounded-xl">
      <div className="flex justify-start items-center w-full text-lg md:text-xl font-semibold my-2 md:my-4 lg:my-6">
        {currView?.title}
      </div>

      <div className="flex justify-start items-center w-full text-sm md:text-base font-normal">
        {currView?.body}
      </div>

      <div className="flex flex-1 justify-start items-end w-full mt-4 lg:mt-6">
        {currView?.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-[#F8B9594D] rounded-full px-2 py-1 md:px-3 md:py-2 lg:px-4 lg:py-1 text-xs md:text-sm lg:text-base opacity-70 text-opacity-100 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ViewPost;
