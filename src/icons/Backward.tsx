import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const BackwardIcon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Icons">
        <path
          id="icon/navigation/arrow_back_24px"
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
          fill="#060818"
        />
      </g>
    </svg>
  );
};

export default BackwardIcon;
