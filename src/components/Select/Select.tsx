import React, { Fragment, useState, useEffect, CSSProperties } from "react";
import Select, { components, IndicatorProps, ValueType } from "react-select";
import { colors } from "@styles";
import { CaretIcon } from "../Icon/Icons";
import { isMobile } from "@utils";
import { SelectNative } from "./SelectNative";
import { DisabledUIProps, OptionType, SelectComponentProps, SizeProps, WidthProps } from "./Select.props";
import { Spacer } from "@styled";
import { LabelStyled } from "./Select.style";
import tickSVG from "../../assets/tick.svg";
import { throttle } from "lodash";

/**
 * <DropdownIndicator />
 */
const DropdownIndicator = (props: IndicatorProps<any>) => {
  // NOTE: using hideSelectedOptions to set the disabled fill color for now because the user cannot select the options anyway
  const { menuIsOpen, hideSelectedOptions } = props.selectProps;
  const fillColor = hideSelectedOptions ? colors.text.disabled : colors.text.primary;

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
const fonts = () => ({
  fontSize: "17px",
  fontWeight: "normal",
  color: colors.primary,
});

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
  const [mobile, setMobile] = useState<boolean>(isClient ? isMobile() : false);

  const handleResize = () => {
    setMobile(isMobile());
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
      const borderStyle = hasDisabledUI ? `2px solid ${colors.border.disabled}` : `2px solid ${colors.primary}`;

      return {
        ...provided,
        display: "flex",
        height: size === "large" ? 56 : 50,
        ...fonts(),
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

  return (
    <Fragment>
      {mobile ? (
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
