import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const MotorcycleIcon = (props: Props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon/action/motorcycle_24px">
        <path
          id="icon/action/motorcycle_24px_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.58 6.7725L11.5575 3.75H8.25V5.25H10.9425L12.4425 6.75H3.75C1.65 6.75 0 8.4 0 10.5C0 12.6 1.65 14.25 3.75 14.25C5.595 14.25 7.0875 12.9825 7.425 11.25H8.6625L10.74 9.1725C10.5825 9.5775 10.5 10.0275 10.5 10.5C10.5 12.6 12.15 14.25 14.25 14.25C16.35 14.25 18 12.6 18 10.5C18 8.5125 16.5225 6.9225 14.58 6.7725ZM5.865 11.25C5.55 12.1125 4.71 12.75 3.75 12.75C2.5275 12.75 1.5 11.7225 1.5 10.5C1.5 9.2775 2.5275 8.25 3.75 8.25C4.71 8.25 5.55 8.8875 5.865 9.75H3.75V11.25H5.865ZM12 10.5C12 11.745 13.005 12.75 14.25 12.75C15.495 12.75 16.5 11.745 16.5 10.5C16.5 9.255 15.495 8.25 14.25 8.25C13.005 8.25 12 9.255 12 10.5Z"
          fill="#060818"
        />
      </g>
    </svg>
  );
};

export default MotorcycleIcon;
