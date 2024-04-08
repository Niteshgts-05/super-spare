import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const CloseIcon = (props: Props) => {
  return (
    <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m15.833 5.342-1.175-1.175-4.6584 4.6583-4.6583-4.6583-1.175 1.175 4.6583 4.6583-4.6583 4.6584 1.175 1.175 4.6583-4.6584 4.6584 4.6584 1.175-1.175-4.6584-4.6584 4.6584-4.6583z"
        fill="#060818"
      />
    </svg>
  );
};

export default CloseIcon;
