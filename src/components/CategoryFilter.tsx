import React, { useState } from "react";
import Image from "next/image";
interface Option {
  value: string;
  label: string;
  imageUrl: string;
}
const OPTIONS: Option[] = [
  { value: "option1", label: "Option 1", imageUrl: "/image 55.png" },
  { value: "option2", label: "Option 2", imageUrl: "/image 63.png" },
  { value: "option3", label: "Option 3", imageUrl: "/image 55.png" },
  { value: "option4", label: "Option 4", imageUrl: "/image 63.png" },
  { value: "option5", label: "Option 5", imageUrl: "/image 55.png" },
  { value: "option6", label: "Option 6", imageUrl: "/image 63.png" },
  { value: "option7", label: "Option 7", imageUrl: "/image 55.png" },
  { value: "option8", label: "Option 8", imageUrl: "/image 63.png" },
  { value: "option9", label: "Option 9", imageUrl: "/image 55.png" },
];
interface DropdownWithImagesAndCheckboxes {
  name: string;
}
const DropdownWithImagesAndCheckboxes: React.FC<
  DropdownWithImagesAndCheckboxes
> = ({ name }) => {
  const optionsPerColumn = 3;
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
        className="w-full flex items-center bg-white rounded-md text-slate-950 text-base font-bold font-['Poppins'] mt-4"
        onClick={toggleDropdown}
      >
        {name}
        {selectedOptions.length > 0 && (
          <span className="h-2 w-2 bg-green-500 rounded-full ml-1"></span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-gray-400 ml-auto transition-transform duration-300 transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414zM10 11a1 1 0 100 2 1 1 0 000-2z"
            fill="black"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right right-0 mt-2 w-full">
          <div
            className="py-1 flex justify-center"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {OPTIONS.map(
              (option, index) =>
                index % optionsPerColumn === 0 && (
                  <div className="flex flex-col" key={`column-${index}`}>
                    {OPTIONS.slice(index, index + optionsPerColumn).map(
                      (option) => (
                        <label
                          key={option.value}
                          className="flex items-center cursor-pointer px-4 py-2 border border-gray-100"
                        >
                          <Image
                            alt={option.label}
                            src={option.imageUrl}
                            width="100"
                            height="70"
                            className="custom-image"
                          />
                          <input
                            type="checkbox"
                            value={option.value}
                            checked={selectedOptions.includes(option.value)}
                            onChange={() => handleOptionClick(option.value)}
                            style={{ marginTop: "-50px" }}
                            className="checked:bg-gray-900"
                          />
                        </label>
                      )
                    )}
                  </div>
                )
            )}
          </div>
          <div className="border-b border-dotted border-gray-400 w-full mt-5" />
        </div>
      )}
    </div>
  );
};
export default DropdownWithImagesAndCheckboxes;
