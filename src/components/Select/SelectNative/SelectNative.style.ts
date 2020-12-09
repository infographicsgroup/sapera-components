import styled from "styled-components";
import { colors, rgba } from "@styles";
import { DisabledUIProps } from "@components/Select/Select.props";

/**
 * <SelectNativeStyled />
 */
const SelectNativeStyled = styled.select<DisabledUIProps>`
  width: 100%;
  padding: 19px 25px;
  font-family: monospace;
  font-size: 14px;
  font-weight: normal;
  color: ${({ hasDisabledUI }) => (hasDisabledUI ? colors.text.disabled : colors.primary)};
  background-color: ${({ hasDisabledUI }) => (hasDisabledUI ? colors.background.disabled : "none")};
  border: 2px solid ${({ hasDisabledUI }) => (hasDisabledUI ? colors.border.disabled : colors.primary)};
  border-radius: 6px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &:focus {
    border: 2px solid ${rgba(colors.primary, 0.7)};
    outline: 0;
  }
`;

export { SelectNativeStyled };
