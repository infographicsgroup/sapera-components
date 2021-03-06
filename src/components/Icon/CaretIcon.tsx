import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../styles/colors";
import { IconProps } from "./IconTypes";

// "ariaHidden" so icons are accessible to screen readers.
// if icon should be a Semantic Icon (buttons, toggles), either show direct copy, hidden copy, or pass an aria-label to the wrapping element.
// https://a11y-101.com/development/icons-and-links

const SVGStyled = styled.svg<CaretIconProps>`
  transform-origin: center;
  ${({ isUp }) =>
    isUp &&
    css`
      transform: rotate(180deg);
    `}

  ${({ isLeft }) =>
    isLeft &&
    css`
      transform: rotate(90deg);
    `}
`;

interface CaretIconProps extends IconProps {
  isUp?: boolean;
  isLeft?: boolean;
}

const CaretIcon = ({
  className = "",
  width = 13,
  height = 8,
  viewBox = "0 0 13 8",
  fill = colors.primary,
  isUp,
  isLeft,
}: CaretIconProps) => (
  <SVGStyled
    className={`svg-icon ${className}`}
    height={height}
    isLeft={isLeft}
    isUp={isUp}
    viewBox={viewBox}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M13.014 1.061L6.507 7.568 0 1.061 1.06 0l5.447 5.447L11.953 0z" fill={fill} fillRule="evenodd" />
  </SVGStyled>
);

export default CaretIcon;
