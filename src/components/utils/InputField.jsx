// import React from "react";

// const InputField = ({ id, label, type, value, onChange, error }) => (
//   <div className="mt-6 w-4/5">
//     <label className="tracking-wider block mb-1 pl-2 text-lg" htmlFor={id}>
//       {label}
//     </label>
//     <input
//       id={id}
//       type={type}
//       value={value}
//       onChange={onChange}
//       className="rounded-full border border-2 border-[#F8B959] w-full py-1 px-3 focus:outline-none focus:shadow-outline"
//     />
//     {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//   </div>
// );

// export default InputField;

import React from "react";

const InputField = ({ id, label, type, value, onChange, error }) => (
  <div className="mt-6 w-4/5">
    <label className="tracking-wider block mb-1 pl-2 text-lg" htmlFor={id}>
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className="rounded-full border border-2 border-[#F8B959] w-full py-1 px-3 focus:outline-none focus:shadow-outline"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default InputField;
