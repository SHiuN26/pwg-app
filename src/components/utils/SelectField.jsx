import React from "react";

const SelectField = ({ id, label, value, onChange, error, options }) => (
  <div className="mt-6 w-4/5">
    <label className="tracking-wider block mb-1 pl-2 text-lg" htmlFor={id}>
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="rounded-full border border-2 border-[#F8B959] w-full py-1 px-3 focus:outline-none focus:shadow-outline"
    >
      <option value="" disabled>
        Select a role
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default SelectField;
