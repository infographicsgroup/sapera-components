import React from "react";
import { CircleProps } from "./Circle.props";
import { CircleStyled, Dot } from "./Circle.style";
import { colors } from "@sc-styles";

/**
 * <Circle />
 */
const Circle: React.FC<CircleProps> = ({
  className,
  color = colors.primary,
  diameter = 26,
  isActive,
  bgColor = "transparent",
}) => (
  <CircleStyled bgColor={bgColor} className={className} color={color} diameter={diameter} isActive={isActive}>
    <Dot color={color} diameter={diameter / 4.3} />
  </CircleStyled>
);

export { Circle };
