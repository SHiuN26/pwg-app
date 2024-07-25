import React, { useState } from "react";

const MultiSelect = ({ options, selectedOptions, onAddTag, onRemoveTag }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value && !selectedOptions.includes(value)) {
      onAddTag(value);
    }
  };

  return (
    <div className="relative">
      <div className="border border-[#F8B959] rounded-full flex items-center px-3 py-1">
        {selectedOptions.length > 0 && (
          <div className="flex flex-wrap">
            {selectedOptions.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-black text-xs px-2 py-1 rounded-full mr-2 flex items-center"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => onRemoveTag(tag)}
                  className="ml-1 text-black"
                >
                  x
                </button>
              </span>
            ))}
          </div>
        )}

        <select
          defaultValue=""
          onFocus={() => setShowOptions(true)}
          onChange={handleSelectChange}
          className="flex-grow focus:outline-none text-[14px]"
        >
          <option value="" disabled>
            {showOptions ? null : ""}
          </option>
          {showOptions &&
            options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default MultiSelect;
