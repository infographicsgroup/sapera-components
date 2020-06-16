/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState, useEffect, CSSProperties } from "react";
import Select, { components, IndicatorProps, ValueType } from "react-select";
import { Color, lightenColor } from "../../theme/util";
import { CaretIcon } from "../Icon/Icons";
import tickSVG from "../../images/tick.svg";
import isMobileDetect from "../../utils/isMobileDetect";
import { throttle } from "lodash";
import { SelectNative } from "./SelectNative";
import { SelectComponentProps, OptionType, WidthProps, SizeProps } from "./SelectTypes";

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
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(null);
  const [isMobile, setIsMobile] = useState<boolean>(isClient ? isMobileDetect() : false);

  const handleResize = () => {
    setIsMobile(isMobileDetect());
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(handleResize));

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const handleChange = (selectedOption: ValueType<OptionType>) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    container: (_: CSSProperties, state: { selectProps: { width: WidthProps } }) => {
      const { width } = state.selectProps;
      return {
        position: "relative",
        maxWidth: width,
      } as CSSProperties;
    },
    control: (_: CSSProperties, state: { selectProps: { width: WidthProps; size: SizeProps }; isFocused: boolean }) => {
      const { width, size } = state.selectProps;
      return {
        display: "flex",
        height: size === "large" ? 56 : 50,
        ...fonts(),
        border: state.isFocused ? `2px solid ${lightenColor(Color.Primary, 0.7)}` : `2px solid ${Color.BorderGrey}`,
        borderRadius: "6px",
        maxWidth: width,
        padding: "0 16px 0 24px",
      } as CSSProperties;
    },
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: () =>
      ({
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
      } as CSSProperties),
    menuList: () => ({}),
    option: (_: CSSProperties, state: { isSelected: boolean; isFocused: boolean; size: string }) =>
      ({
        backgroundColor: state.isSelected || state.isFocused ? Color.Primary : Color.Inverted,
        color: state.isSelected || state.isFocused ? Color.TextInverted : Color.TextPrimary,
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
          // defaultMenuIsOpen
          onChange={handleChange}
        />
      )}
    </>
  );
};
