import { SVGAttributes } from "react";
type Props = SVGAttributes<SVGSVGElement>;
const BackIcon = (props: Props) => {
  return (
    <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.667 9.167H6.525l4.658-4.659L10 3.333 3.333 10 10 16.667l1.175-1.175-4.65-4.659h10.142V9.167Z"
        fill="#060818"
      />
    </svg>
  );
};
export default BackIcon;
