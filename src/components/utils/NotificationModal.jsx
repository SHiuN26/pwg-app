// import React from "react";
// import IconSuccess from "../icons/IconSuccess";
// import IconError from "../icons/IconError";

// const NotificationModal = ({ show, success, message, onClose }) => {
//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div
//         className={`flex flex-col items-center ${
//           success ? "justify-center p-6" : "justify-around p4"
//         } bg-white rounded-2xl shadow-lg text-center w-[55vh] h-[25vh]`}
//       >
//         <div className={`flex ${success ? "mb-4" : ""}`}>
//           {success ? (
//             <div className="text-green-500">
//               <IconSuccess />
//             </div>
//           ) : (
//             <div className="text-red-500">
//               <IconError />
//             </div>
//           )}
//         </div>
//         <div className="flex text-xl">{message}</div>
//         {!success && (
//           <div className="flex">
//             <button
//               className="bg-[#F8B959] hover:bg-yellow-400 font-bold py-2 px-4 rounded-full w-[20vh]"
//               onClick={onClose}
//             >
//               Ok
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationModal;

import React from "react";
import IconSuccess from "../icons/IconSuccess";
import IconError from "../icons/IconError";

const NotificationModal = ({ show, success, message, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`flex flex-col items-center ${
          success ? "justify-center p-6" : "justify-around p4"
        } bg-white rounded-2xl shadow-lg text-center w-[55vh] h-[25vh]`}
      >
        <div className={`flex ${success ? "mb-4" : ""}`}>
          {success ? (
            <div className="text-green-500">
              <IconSuccess />
            </div>
          ) : (
            <div className="text-red-500">
              <IconError />
            </div>
          )}
        </div>
        <div className="flex text-xl">{message}</div>
        {!success && (
          <div className="flex">
            <button
              className="bg-[#F8B959] hover:bg-yellow-400 font-bold py-2 px-4 rounded-full w-[20vh]"
              onClick={onClose}
            >
              Ok
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationModal;
