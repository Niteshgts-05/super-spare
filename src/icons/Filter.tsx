import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const FilterIcon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="filter_alt">
        <path
          id="Vector"
          d="M4.25506 5.61C6.27506 8.2 10.0051 13 10.0051 13V19C10.0051 19.55 10.4551 20 11.0051 20H13.0051C13.5551 20 14.0051 19.55 14.0051 19V13C14.0051 13 17.7251 8.2 19.7451 5.61C20.2551 4.95 19.7851 4 18.9551 4H5.04506C4.21506 4 3.74506 4.95 4.25506 5.61Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default FilterIcon;
