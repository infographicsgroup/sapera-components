import React from "react";
import { Color } from "../../theme/util";
import { IconProps } from "./IconTypes";

interface TickIconProps extends IconProps {
  isUp?: boolean;
  isLeft?: boolean;
}

const TickIcon = ({
  className = "",
  width = 11,
  height = 12,
  viewBox = "0 0 11 12",
  fill = Color.BackgroundMain,
}: TickIconProps) => {
  return (
    <svg
      className={`svg-icon ${className}`}
      height={height}
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M-3-2h16v16H-3z" />
        <path d="M.494 7.125l3.267 4.878h.746L10.508 0H9.39L4.063 10.656l-2.366-3.53z" fill={fill} />
      </g>
    </svg>
  );
};

export default TickIcon;
