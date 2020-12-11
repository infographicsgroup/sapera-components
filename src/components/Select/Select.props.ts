import { ControlProps } from "../../form";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { ValueType } from "react-select";
import { isMobile } from "@utils";
import { colors } from "@sc-styles";
import { fonts } from "@components/Select/Select.style";
import tickSVG from "@assets/tick.svg";
import { throttle } from "lodash";

const OPTIONS_DATA = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

type OptionType = ControlProps<string> & {
  value: string;
  label: string;
};

type DisabledUIProps = ControlProps<boolean> & {
  hasDisabledUI?: boolean;
};

type WidthProps = ControlProps<number> & {
  width?: number | string;
};

type SizeProps<V = string | number> = ControlProps<V> & {
  width?: number | string;
  size?: "large" | "medium";
};

type CustomSelectProps = ControlProps<any> & {
  width?: number | string;
  size?: "large" | "medium";
  hasDisabledUI?: boolean;
};

type SelectComponentProps = ControlProps<any> & {
  className?: string;
  options: OptionType[];
  selectProps?: CustomSelectProps;
  placeholder?: string;
  label: string;
  width?: number | string;
  size?: "large" | "medium";
  hasDisabledUI?: boolean;
};

/**
 * <Select /> Props
 */
const useSelectProps = ({
  className,
  options,
  width = 286,
  size = "large",
  placeholder = "Select...",
  label,
  hasDisabledUI,
}: SelectComponentProps) => {
  const isClient = typeof window !== "undefined";
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(null);
  const [mobile, setMobile] = useState<boolean>(isClient ? isMobile() : false);

  const handleResize = () => {
    throttle(() => {
      setMobile(isMobile());
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (selectedOption: ValueType<OptionType>) => {
    setSelectedOption(selectedOption);
  };

  const { customStyles } = useMemo(() => {
    const customStyles = {
      container: (_: CSSProperties, state: { selectProps: { width: WidthProps } }) => {
        const { width } = state.selectProps;

        return {
          position: "relative",
          maxWidth: width,
        } as CSSProperties;
      },
      control: (
        provided: CSSProperties,
        state: {
          selectProps: { width: WidthProps; size: SizeProps; hasDisabledUI: DisabledUIProps };
          isFocused: boolean;
        },
      ) => {
        const { width, size, hasDisabledUI } = state.selectProps;
        const borderStyle = hasDisabledUI ? `2px solid ${colors.border.disabled}` : `2px solid ${colors.primary}`;

        return {
          ...provided,
          display: "flex",
          height: size === "large" ? 56 : 50,
          ...fonts,
          border: borderStyle,
          borderRadius: "6px",
          maxWidth: width,
          padding: "0 16px 0 24px",
          backgroundColor: hasDisabledUI ? colors.background.disabled : "none",
          // TODO: Remove pointerEvents and fix disabledUI for screen reader.
          pointerEvents: hasDisabledUI ? "none" : "auto",
        } as CSSProperties;
      },
      indicatorSeparator: () => ({
        display: "none",
      }),
      menu: () =>
        ({
          position: "absolute",
          zIndex: 2,
          border: `2px solid ${colors.primary}`,
          maxWidth: "87%",
          width: "100%",
          left: "50%",
          backgroundColor: `${colors.inverted}`,
          transform: "translate(-50%, -2px)",
          boxShadow: "none",
          borderTopRightRadius: "none",
          borderTopLeftRadius: "none",
          margin: "0 auto",
          ...fonts,
        } as CSSProperties),
      menuList: () => ({}),
      placeholder: (
        _: CSSProperties,
        state: {
          selectProps: { hasDisabledUI: DisabledUIProps };
        },
      ) => {
        const { hasDisabledUI } = state.selectProps;
        return {
          color: hasDisabledUI ? colors.text.disabled : colors.text.primary,
        };
      },
      option: (_: CSSProperties, state: { isSelected: boolean; isFocused: boolean; size: string }) =>
        ({
          backgroundColor: state.isSelected || state.isFocused ? colors.primary : colors.inverted,
          color: state.isSelected || state.isFocused ? colors.text.inverted : colors.text.primary,
          padding: state.size === "large" ? "22px 25px" : "19px 25px",
          backgroundImage: state.isSelected ? `url(${tickSVG})` : "none",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 25px center",
        } as CSSProperties),
      valueContainer: (provided: CSSProperties) => ({
        ...provided,
        padding: 0,
      }),
    };

    return { customStyles };
  }, [width, size, hasDisabledUI]);

  return {
    className,
    options,
    width,
    size,
    placeholder,
    label,
    hasDisabledUI,
    mobile,
    customStyles,
    selectedOption,
    handleChange,
  };
};

export { useSelectProps, OPTIONS_DATA, DisabledUIProps, OptionType, SelectComponentProps };
