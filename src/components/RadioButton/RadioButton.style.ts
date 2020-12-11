import styled from "styled-components";
import { Color } from "@sc-styles";
const RADIO_BUTTON_WIDTH = 24;

/**
 * <ButtonWrapper />
 */
const ButtonWrapper = styled.div<{ color?: string | Color | undefined; disabled?: boolean }>`
  position: relative;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.176;
  min-height: ${RADIO_BUTTON_WIDTH}px;
  margin: 1rem 0;

  input {
    opacity: 0;
    visibility: visible;
    position: absolute;
    margin-left: 0;

    &:focus {
      + label::before {
        outline: rgb(59, 153, 252) auto 5px;
      }
    }

    + label {
      position: relative;
      display: flex;
      align-items: center;
      -webkit-box-orient: horizontal;

      cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

      &::before {
        content: "";
        margin-right: 15px;
        border-radius: 50%;
        border: 2px solid ${({ disabled, color }) => (disabled ? "#949F9F" : color)};
        width: ${RADIO_BUTTON_WIDTH}px;
        height: ${RADIO_BUTTON_WIDTH}px;
        box-sizing: border-box;
      }

      &::after {
        content: "";
        position: absolute;
        top: ${RADIO_BUTTON_WIDTH / 4}px;
        left: ${RADIO_BUTTON_WIDTH / 4}px;
        border-radius: 50%;
        width: ${RADIO_BUTTON_WIDTH / 2}px;
        height: ${RADIO_BUTTON_WIDTH / 2}px;
        box-sizing: border-box;
      }
    }

    &:checked {
      + label::after {
        background: ${({ color }) => color};
      }
    }

    label {
      margin-left: 20px;
    }
  }
`;

export { ButtonWrapper };
