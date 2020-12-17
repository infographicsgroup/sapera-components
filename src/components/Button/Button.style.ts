import styled, { css } from "styled-components";
import { ButtonProps } from "./Button.props";
import { colors } from "../../styles/colors";

const BUTTON_HEIGHTS = {
  large: 56,
  medium: 50,
  small: 44,
};

const BUTTON_PADDING = {
  large: "0 48",
  medium: "0 48",
  small: "0 25",
};

/**
 * <StyledButton />
 */
const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: row;
  width: ${({ width }) => width};
  height: ${({ size }) => (size ? BUTTON_HEIGHTS[size] + "px" : BUTTON_HEIGHTS.large + "px")};
  padding: ${({ size }) => (size ? BUTTON_PADDING[size] + "px" : BUTTON_PADDING.large + "px")};
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 1px;
  color: ${colors.text.inverted};
  background: ${({ disabledUI, bg }) => (disabledUI ? colors.disabled : bg)};
  border: none;
  border-radius: 28px;

  cursor: ${({ disabledUI }) => (disabledUI ? "default" : "pointer")};

  svg {
    margin: 0 0 0 10px;
  }

  svg,
  path {
    fill: ${colors.text.inverted};
  }

  ${({ isSecondary, bg }) =>
    isSecondary &&
    css`
      color: ${colors.primary};
      background: ${bg};
      border: 2px solid ${colors.primary};
      svg,
      path {
        fill: ${colors.primary};
      }
    `}

  ${({ iconFirst }) =>
    iconFirst &&
    css`
      flex-direction: row-reverse;
      svg {
        margin: 0 10px 0 0;
      }
    `}
`;

export { StyledButton };
