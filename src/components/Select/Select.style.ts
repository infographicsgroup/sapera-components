import styled from "styled-components";
import { colors, rgba } from "@styles";
import { DisabledUIProps } from "./Select.props";

const fonts = () => ({
  fontSize: "17px",
  fontWeight: "normal",
  color: colors.primary,
});

/**
 * <LabelStyled />
 */
const LabelStyled = styled.label`
  font-family: sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
`;

/**
 * <SelectNativeStyled />
 */
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

export { LabelStyled, SelectNativeStyled, fonts };
