import React, { FC } from "react";
import { colors } from "@styles";
import { CaretIcon } from "../../Icon/Icons";
import { Box, Column, Spacer } from "@styled";
import { SelectNativeStyled } from "./SelectNative.style";
import { LabelStyled } from "@components/Select/Select.style";
import { OptionType, SelectComponentProps } from "@components/Select/Select.props";

/**
 * <SelectNative />
 */
const SelectNative: FC<SelectComponentProps> = ({ className, options, label, hasDisabledUI }) => (
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

export { SelectNative };
