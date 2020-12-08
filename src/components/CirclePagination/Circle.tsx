import React from "react";
import styled, { css } from "styled-components";
import { colors, Color, breakpoint } from "../../styles";

interface CircleProps {
  className?: string;
  diameter?: number;
  color?: Color;
  isActive?: boolean;
  bgColor?: Color | string;
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
  color = colors.primary,
  diameter = 26,
  isActive,
  bgColor = "transparent",
}: CircleProps) => (
  <CircleStyled bgColor={bgColor} className={className} color={color} diameter={diameter} isActive={isActive}>
    <Dot color={color} diameter={diameter / 4.3} />
  </CircleStyled>
);

export default Circle;
