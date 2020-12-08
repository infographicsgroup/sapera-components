import React from "react";
import { Color } from "../../theme/util";
import { CircleProps } from "./Circle.props";
import { CircleStyled, Dot } from "./Circle.style";

/**
 * <Circle />
 */
const Circle: React.FC<CircleProps> = ({
  className,
  color = Color.Primary,
  diameter = 26,
  isActive,
  bgColor = "transparent",
}) => (
  <CircleStyled bgColor={bgColor} className={className} color={color} diameter={diameter} isActive={isActive}>
    <Dot color={color} diameter={diameter / 4.3} />
  </CircleStyled>
);

export { Circle };
