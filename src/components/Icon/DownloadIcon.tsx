import React from "react";
import { colors } from "../../styles/colors";
import { IconProps } from "./IconTypes";

// "ariaHidden" so icons are accessible to screen readers.
// if icon should be a Semantic Icon (buttons, toggles), either show direct copy, hidden copy, or pass an aria-label to the wrapping element.
// https://a11y-101.com/development/icons-and-links

const DownloadIcon = ({
  className = "",
  width = 20,
  height = 20,
  viewBox = "0 0 20 20",
  fill = colors.primary,
}: IconProps) => (
  <svg
    className={`svg-icon ${className}`}
    height={height}
    role="img"
    viewBox={viewBox}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M15.639 10v5.639H4.36V10H2.75v5.639c0 .886.725 1.611 1.611 1.611H15.64c.886 0 1.611-.725 1.611-1.611V10h-1.611zm-4.833.54l2.086-2.079 1.136 1.136L10 13.625 5.972 9.597l1.136-1.136 2.086 2.079V2.75h1.612v7.79z"
      fill={fill}
    />
  </svg>
);

export default DownloadIcon;
