import { SVGAttributes } from "react";
type Props = SVGAttributes<SVGSVGElement>;
const FarwardIcon = (props: Props) => {
  return (
    <svg width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m12.5 4-1.41 1.41L16.67 11H4.5v2h12.17l-5.58 5.59L12.5 20l8-8-8-8Z"
        fill="#fff"
      />
    </svg>
  );
};
export default FarwardIcon;
