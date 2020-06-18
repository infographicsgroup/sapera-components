import React from "react";
import styled, { css } from "styled-components";
import { Color } from "../../theme/util";
import { IconProps } from "./IconTypes";

const SVGStyled = styled.svg<CaretIconProps>`
  transform-origin: center;
  ${(p) =>
    p.isUp &&
    css`
      transform: rotate(180deg);
    `}

  ${(p) =>
    p.isLeft &&
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
  fill = Color.Primary,
  isUp,
  isLeft,
}: CaretIconProps) => {
  return (
    <SVGStyled
      className={`svg-icon ${className}`}
      height={height}
      isLeft={isLeft}
      isUp={isUp}
      viewBox={viewBox}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13.014 1.061L6.507 7.568 0 1.061 1.06 0l5.447 5.447L11.953 0z" fill={fill} fillRule="evenodd" />
    </SVGStyled>
  );
};

export default CaretIcon;
