import React, { useEffect, useState } from "react";
import Image from "next/image";
import DownwardIcon from "@/icons/Downward";

interface Option {
  value: string;
  label: string;
  imageUrl: string;
}

const OPTIONS: Option[] = [
  { value: "option1", label: "Option 1", imageUrl: "/image_60.png" },
  { value: "option2", label: "Option 2", imageUrl: "/image_63.png" },
  { value: "option3", label: "Option 3", imageUrl: "/image_60.png" },
  { value: "option4", label: "Option 4", imageUrl: "/image_63.png" },
  { value: "option5", label: "Option 5", imageUrl: "/image_55.png" },
  { value: "option6", label: "Option 6", imageUrl: "/image_60.png" },
  { value: "option7", label: "Option 7", imageUrl: "/image_55.png" },
  { value: "option8", label: "Option 8", imageUrl: "/image_63.png" },
  { value: "option9", label: "Option 9", imageUrl: "/image_55.png" },
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
            className="py-1 flex justify-start md:justify-center"
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
                        <div
                          key={option.value}
                          className="w-[109px] h-[109px] relative bg-white border border-gray-100"
                        >
                          <label className="block w-[109px] h-[109px] relative">
                            <input
                              onChange={() => handleOptionClick(option.value)}
                              type="checkbox"
                              value={option.value}
                              checked={selectedOptions.includes(option.value)}
                              className="w-[18px] h-[18px] absolute right-2 top-[5px] accent-[#02A44F] focus:accent-[#02A44F] checked"
                            />
                            <div className="w-[86px] h-[86px] px-[7.17px] py-[17.92px] left-[11px] top-[12px] absolute justify-center items-center inline-flex">
                              <Image
                                alt={option.label}
                                src={option.imageUrl}
                                width="100"
                                height="70"
                              />
                            </div>
                          </label>
                        </div>
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
