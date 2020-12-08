import React from "react";
import { colors } from "../../styles/colors";
import { IconProps } from "./IconTypes";

// "ariaHidden = true" so icons are accessible to screen readers.
// if icon should be a Semantic Icon (buttons, toggles), either show direct copy, hidden copy, or pass an aria-label to the wrapping element.
// https://a11y-101.com/development/icons-and-links

const ErrorIcon = ({
  className = "",
  width = 20,
  height = 20,
  viewBox = "0 0 24.6 24.6",
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
      clipRule="evenodd"
      d="m12.3.1c6.8 0 12.2 5.5 12.2 12.2 0 6.8-5.5 12.2-12.2 12.2s-12.2-5.4-12.2-12.2 5.5-12.2 12.2-12.2zm0 1.7c-5.8 0-10.5 4.7-10.5 10.5s4.7 10.5 10.5 10.5 10.5-4.7 10.5-10.5-4.7-10.5-10.5-10.5zm-4 5.2 4 4 4-4h2.5l-5.2 5.2 5.3 5.3h-2.5l-4-4-4 4h-2.6l5.3-5.3-5.3-5.2z"
      fill={fill}
      fillRule="evenodd"
    />
  </svg>
);

export default ErrorIcon;
