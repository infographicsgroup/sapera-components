import React from "react";
import { Color } from "../../theme/util";
import { IconProps } from "./IconTypes";

// "ariaHidden = true" so icons are accessible to screen readers.
// if icon should be a Semantic Icon (buttons, toggles), either show direct copy, hidden copy, or pass an aria-label to the wrapping element.
// https://a11y-101.com/development/icons-and-links

const CheckIcon = ({
  className = "",
  width = 20,
  height = 20,
  viewBox = "0 0 24.8 24.8",
  fill = Color.Primary,
}: IconProps) => {
  return (
    <svg
      aria-hidden={true}
      aria-label="input is valid"
      className={`svg-icon ${className}`}
      height={height}
      role="img"
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4,0.1c6.8,0,12.2,5.5,12.2,12.2c0,6.8-5.5,12.2-12.2,12.2S0.1,19.1,0.1,12.4
	C0.1,5.6,5.6,0.1,12.4,0.1z M12.4,1.9C6.6,1.9,1.9,6.6,1.9,12.4c0,5.8,4.7,10.5,10.5,10.5s10.5-4.7,10.5-10.5
	C22.9,6.6,18.2,1.9,12.4,1.9z M17.5,6.2L11,19.4H9.4L5.8,14h2.1l2.2,3.3l5.5-11H17.5z"
        fill={fill}
      />
    </svg>
  );
};

export default CheckIcon;
