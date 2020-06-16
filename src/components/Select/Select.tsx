/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState, useEffect } from "react";
import Select, {
  OptionTypeBase,
  components,
  IndicatorProps,
  ControlProps,
  SingleValueProps,
  OptionProps,
  ValueContainerProps,
} from "react-select";
import { Color, lightenColor } from "../../theme/util";
import { CaretIcon } from "../Icon/Icons";
import tickSVG from "../../images/tick.svg";
import isMobileDetect from "../../utils/isMobileDetect";
import { throttle } from "lodash";
import { SelectNative } from "./SelectNative";

interface OptionType extends OptionTypeBase {
  value: string;
  label: string;
}

interface WidthProps {
  width?: number | string;
}
interface SizeProps extends WidthProps {
  size?: "large" | "medium";
}

export interface SelectComponentProps extends SizeProps {
  className?: string;
  options: OptionType[];
  selectProps: SizeProps;
}

const DropdownIndicator = (props: IndicatorProps<any>) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <CaretIcon isUp={props.selectProps.menuIsOpen} />
      </components.DropdownIndicator>
    )
  );
};

const fonts = () => ({
  fontFamily: "monospace",
  fontSize: "14px",
  fontWeight: "normal",
  color: Color.Primary,
});

export const SelectComponent: FC<SelectComponentProps> = ({
  className,
  options,
  width,
  size = "large",
}: SelectComponentProps) => {
  const isClient = typeof window !== "undefined";
  const [selectedOption, setSelectedOption] = useState<null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(isClient ? isMobileDetect() : false);

  const handleResize = () => {
    console.log("on resize");
    setIsMobile(isMobileDetect());
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(handleResize));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    option: (provided: OptionProps<any>, state: { isSelected: boolean; isFocused: boolean; size: string }) => ({
      ...provided,
      backgroundColor: state.isSelected || state.isFocused ? Color.Primary : Color.Inverted,
      color: state.isSelected || state.isFocused ? Color.TextInverted : Color.TextPrimary,
      padding: state.size === "large" ? "22px 25px" : "19px 25px",
      backgroundImage: state.isSelected ? `url(${tickSVG})` : "none",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 25px center",
    }),
    menu: () => ({
      position: "absolute",
      zIndex: 2,
      border: `2px solid ${Color.Primary}`,
      maxWidth: "87%",
      width: "100%",
      left: "50%",
      backgroundColor: `${Color.Inverted}`,
      transform: "translate(-50%, -2px)",
      boxShadow: "none",
      borderTopRightRadius: "none",
      borderTopLeftRadius: "none",
      margin: "0 auto",
      ...fonts(),
    }),
    control: (
      _: ControlProps<any>,
      state: { selectProps: { width: WidthProps; size: SizeProps }; isFocused: boolean },
    ) => {
      const { width, size } = state.selectProps;
      return {
        display: "flex",
        height: size === "large" ? 56 : 50,
        ...fonts(),
        border: state.isFocused ? `2px solid ${lightenColor(Color.Primary, 0.7)}` : `2px solid ${Color.BorderGrey}`,
        borderRadius: "6px",
        maxWidth: width,
        padding: "0 16px 0 24px",
      };
    },
    container: (_, { selectProps: { width } }: SelectComponentProps) => ({
      position: "relative",
      maxWidth: width,
    }),
    singleValue: (provided: SingleValueProps<any>, state: { isDisabled: boolean }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
    valueContainer: (provided: ValueContainerProps<any>) => ({
      ...provided,
      padding: 0,
    }),
    menuList: () => ({}),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };
  return (
    <>
      {isMobile ? (
        <SelectNative options={options} size={size} />
      ) : (
        <Select
          className={className}
          components={{ DropdownIndicator }}
          isSearchable={false}
          options={options}
          size={size}
          styles={customStyles}
          value={selectedOption}
          width={width || 286}
          onChange={handleChange}
        />
      )}
    </>
  );
};
