import React, { FC } from "react";
import styled from "styled-components";
import { colors, rgba } from "../../styles";
import { CaretIcon } from "../Icon/Icons";
import { Box, Column, Spacer } from "../../styled";
import { OptionType, SelectComponentProps, DisabledUIProps } from "./SelectTypes";
import { LabelStyled } from "./Select";

const SelectNativeStyled = styled.select<DisabledUIProps>`
  border: 2px solid ${(p) => (p.hasDisabledUI ? colors.border.disabled : colors.primary)};
  padding: 19px 25px;
  width: 100%;
  border-radius: 6px;
  font-family: monospace;
  font-size: 14px;
  font-weight: normal;
  color: ${(p) => (p.hasDisabledUI ? colors.text.disabled : colors.primary)};
  background-color: ${(p) => (p.hasDisabledUI ? colors.background.disabled : "none")};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    outline: 0;
    border: 2px solid ${rgba(colors.primary, 0.7)};
  }
`;

export const SelectNative: FC<SelectComponentProps> = ({
  className,
  options,
  label,
  hasDisabledUI,
}: SelectComponentProps) => (
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
        {options.map((item: OptionType, index: number) => (
          <option key={`item-${index}`} value={item.value}>
            {item.label}
          </option>
        ))}
      </SelectNativeStyled>
      <Box position="absolute" right="25px" style={{ transform: "translateY(-50%)" }} top="50%">
        <CaretIcon fill={hasDisabledUI ? colors.text.disabled : colors.text.primary} />
      </Box>
    </Column>
  </Column>
);
