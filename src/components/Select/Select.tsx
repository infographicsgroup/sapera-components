import React, { CSSProperties, Fragment, useEffect, useState } from "react";
import Select, { components, IndicatorProps, ValueType } from "react-select";
import { Color } from "../../theme/util";
import { CaretIcon } from "../Icon/Icons";
import { SelectNative } from "./SelectNative";
import { DisabledUIProps, OptionType, SelectComponentProps, SizeProps, WidthProps } from "./Select.props";
import { Spacer } from "../../styled";
import { fonts, LabelStyled } from "./Select.style";
import isMobileDetect from "../../utils/isMobileDetect";
import tickSVG from "../../assets/tick.svg";
import { throttle } from "lodash";

/**
 * <DropdownIndicator />
 */
const DropdownIndicator = (props: IndicatorProps<any>) => {
  // NOTE: using hideSelectedOptions to set the disabled fill color for now because the user cannot select the options anyway
  const { menuIsOpen, hideSelectedOptions } = props.selectProps;
  const fillColor = hideSelectedOptions ? Color.TextDisabled : Color.TextPrimary;

  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <CaretIcon fill={fillColor} isUp={menuIsOpen} />
      </components.DropdownIndicator>
    )
  );
};

/**
 * <SelectComponent />
 */
const SelectComponent: React.FC<SelectComponentProps> = ({
  className,
  options,
  width = 286,
  size = "large",
  placeholder = "Select...",
  label,
  hasDisabledUI,
}) => {
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
  }, []);

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
    control: (
      provided: CSSProperties,
      state: {
        selectProps: { width: WidthProps; size: SizeProps; hasDisabledUI: DisabledUIProps };
        isFocused: boolean;
      },
    ) => {
      const { width, size, hasDisabledUI } = state.selectProps;
      const borderStyle = hasDisabledUI ? `2px solid ${Color.BorderDisabled}` : `2px solid ${Color.Primary}`;

      return {
        ...provided,
        display: "flex",
        height: size === "large" ? 56 : 50,
        ...fonts(),
        border: borderStyle,
        borderRadius: "6px",
        maxWidth: width,
        padding: "0 16px 0 24px",
        backgroundColor: hasDisabledUI ? Color.BackgroundDisabled : "none",
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
    placeholder: (
      _: CSSProperties,
      state: {
        selectProps: { hasDisabledUI: DisabledUIProps };
      },
    ) => {
      const { hasDisabledUI } = state.selectProps;
      return {
        color: hasDisabledUI ? Color.TextDisabled : Color.TextPrimary,
      };
    },
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
    <Fragment>
      {isMobile ? (
        <SelectNative hasDisabledUI={hasDisabledUI} label={label} options={options} />
      ) : (
        <div>
          {/* TODO: Included label for accessibility but need design. */}
          <LabelStyled htmlFor={label}>{label}</LabelStyled>
          <Spacer mb={1} />
          {/* NOTE: adding disabled UI instead of disabled attribute for screen reader */}
          <Select
            aria-disabled={hasDisabledUI}
            className={className}
            components={{ DropdownIndicator }}
            hasDisabledUI={hasDisabledUI}
            hideSelectedOptions={hasDisabledUI}
            id={label}
            isSearchable={false}
            openMenuOnClick={!hasDisabledUI}
            options={options}
            placeholder={placeholder}
            size={size}
            styles={customStyles}
            value={selectedOption}
            width={width}
            onChange={handleChange}
          />
        </div>
      )}
    </Fragment>
  );
};

export { SelectComponent };
