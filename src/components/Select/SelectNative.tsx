import React, { FC } from "react";
import styled from "styled-components";
import { Color, lightenColor } from "../../theme/util";
import { CaretIcon } from "../Icon/Icons";
import { Box, Column, Spacer } from "../../theme/custom-styled-components";
import { OptionType, SelectComponentProps, DisabledUIProps } from "./SelectTypes";
import { LabelStyled } from "./Select";

const SelectNativeStyled = styled.select<DisabledUIProps>`
  border: 2px solid ${(p) => (p.hasDisabledUI ? Color.BorderDisabled : Color.Primary)};
  padding: 19px 25px;
  width: 100%;
  border-radius: 6px;
  font-family: monospace;
  font-size: 14px;
  font-weight: normal;
  color: ${(p) => (p.hasDisabledUI ? Color.TextDisabled : Color.Primary)};
  background-color: ${(p) => (p.hasDisabledUI ? Color.BackgroundDisabled : "none")};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: 0;
    border: 2px solid ${lightenColor(Color.Primary, 0.7).css()};
  }
`;

export const SelectNative: FC<SelectComponentProps> = ({
  className,
  options,
  label,
  hasDisabledUI,
}: SelectComponentProps) => {
  return (
    <Column>
      <LabelStyled htmlFor={label}>{label}</LabelStyled>
      <Spacer mb={1} />
      {/* TODO: Remove disabled attribute and use DisabledUI for screen reader */}
      <Column position="relative">
        <SelectNativeStyled
          aria-label={label}
          className={className}
          disabled={hasDisabledUI}
          hasDisabledUI={hasDisabledUI}
          id={label}
        >
          {options.map((item: OptionType, index: number) => {
            return (
              <option key={`item-${index}`} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </SelectNativeStyled>
        <Box position="absolute" right="25px" style={{ transform: "translateY(-50%)" }} top="50%">
          <CaretIcon fill={hasDisabledUI ? Color.TextDisabled : Color.TextPrimary} />
        </Box>
      </Column>
    </Column>
  );
};
