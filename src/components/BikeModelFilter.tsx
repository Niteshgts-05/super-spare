import React, { useState } from "react";
import DownwardIcon from "@/icons/Downward";
interface Option {
  value: string;
  label: string;
  imageUrl: string;
}

const OPTIONS: Option[] = [
  { value: "option1", label: "Splendor 13S 100CC", imageUrl: "/image 63.png" },
  { value: "option2", label: "HF Deluxe", imageUrl: "/image 63.png" },
  { value: "option3", label: "CBZ Extreme", imageUrl: "/image 63.png" },
  { value: "option4", label: "Splendor 13S 100CC", imageUrl: "/image 63.png" },
  { value: "option5", label: "HF Deluxe", imageUrl: "/image 63.png" },
  { value: "option6", label: "CBZ Extreme", imageUrl: "/image 63.png" },
  { value: "option7", label: "Option 7", imageUrl: "/image 63.png" },
  { value: "option8", label: "Option 8", imageUrl: "/image 63.png" },
  { value: "option9", label: "Option 9", imageUrl: "/image 63.png" },
];
interface DropdownAndCheckboxes {
  name: string;
}

const DropdownAndCheckboxes: React.FC<DropdownAndCheckboxes> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        className="w-full flex items-center bg-white rounded-md text-slate-950 text-base font-bold font-poppins mt-4"
        onClick={toggleDropdown}
      >
        {name}
        {selectedOptions.length > 0 && (
          <span className="h-2 w-2 bg-green-500 rounded-full ml-1"></span>
        )}
        <DownwardIcon
          className={`h-4 w-4 text-gray-400 ml-auto transition-transform duration-300 transform ${
            isOpen && "rotate-180"
          }`}
        />
      </button>
      {isOpen && (
        <div className="origin-top-right right-0 mt-2 w-full">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {OPTIONS.map((option) => (
              <label
                key={option.value}
                className="flex items-center cursor-pointer py-1"
              >
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => handleOptionClick(option.value)}
                  className="w-[18px] h-[18px] mr-2 accent-[#02A44F]"
                />
                <div className="text-slate-950 text-sm font-semibold font-poppins capitalize mt-1">
                  {option.label}
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownAndCheckboxes;
