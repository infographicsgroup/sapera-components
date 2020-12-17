import React from "react";
import styled, { css } from "styled-components";
import { Color, ColorType, breakpoint } from "../../theme/util";

interface CircleProps {
  className?: string;
  diameter?: number;
  color?: ColorType;
  isActive?: boolean;
  bgColor?: ColorType | string;
}

const Dot = styled.div<CircleProps>`
  width: ${(p) => p.diameter}px;
  height: ${(p) => p.diameter}px;
  margin: auto;
  border-radius: 50%;
  background-color: ${(p) => p.color};
`;

const CircleStyled = styled.div<CircleProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${(p) => p.diameter}px;
  height: ${(p) => p.diameter}px;
  border-radius: 50%;

  ${breakpoint.lg`
    background-color: ${(p: CircleProps) => p.bgColor};
  `}

  ${(p) =>
    p.isActive &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${(p: CircleProps) => p.color};
    `}
`;

const Circle = ({
  className,
  color = Color.Primary,
  diameter = 26,
  isActive,
  bgColor = "transparent",
}: CircleProps) => {
  return (
    <CircleStyled bgColor={bgColor} className={className} color={color} diameter={diameter} isActive={isActive}>
      <Dot color={color} diameter={diameter / 4.3} />
    </CircleStyled>
  );
};

export default Circle;