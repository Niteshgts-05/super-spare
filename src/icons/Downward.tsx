import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const DownwardIcon = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414zM10 11a1 1 0 100 2 1 1 0 000-2z"
        fill="black"
      />
    </svg>
  );
};

export default DownwardIcon;
