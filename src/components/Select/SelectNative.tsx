import React, { FC } from "react";
import styled from "styled-components";
import { Color, lightenColor } from "../../theme/util";
import { CaretIcon } from "../Icon/Icons";
import { Box, Column } from "../../theme/custom-styled-components";

interface SelectNativeStyledProps {
  size?: "large" | "medium";
}

const SelectNativeStyled = styled.select<SelectNativeStyledProps>`
  height: ${(p) => (p.size === "large" ? 56 : 50)};
  border: 2px solid ${Color.BorderGrey};
  padding: ${(p) => (p.size === "large" ? "22px 25px" : "19px 25px")};
  width: 100%;
  border-radius: 6px;
  font-family: monospace;
  font-size: 14px;
  font-weight: normal;
  color: ${Color.Primary};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: 0;
    border: 2px solid ${lightenColor(Color.Primary, 0.7).css()};
  }
`;

export interface SelectNativeProps {
  className?: string;
  size?: "large" | "medium";
  options?: any;
}

export const SelectNative: FC<SelectNativeProps> = ({ className, options, size = "medium" }: SelectNativeProps) => {
  return (
    <Column alignItems="center" position="relative">
      <SelectNativeStyled className={className} size={size}>
        {options.map((item: any, index: number) => {
          return (
            <option key={`item-${index}`} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </SelectNativeStyled>
      <Box alignSelf="flex-end" position="absolute" right="25px" style={{ transform: "translateY(-50%)" }} top="50%">
        <CaretIcon />
      </Box>
    </Column>
  );
};
