import React, { Fragment } from "react";
import Select, { components, IndicatorProps } from "react-select";
import { CaretIcon } from "../Icon/Icons";
import { hoc } from "@utils";
import { SelectNative } from "@components/Select/SelectNative";
import { useSelectProps } from "./Select.props";
import { LabelStyled } from "./Select.style";
import { Spacer } from "@styled";
import { colors } from "@styles";

/**
 * <DropdownIndicator />
 */
const DropdownIndicator = (props: IndicatorProps<any>) => {
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
const SelectComponent = hoc(
  useSelectProps,
  ({
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
  }) => (
    <Fragment>
      {mobile ? (
        <SelectNative hasDisabledUI={hasDisabledUI} label={label} options={options} />
      ) : (
        <div>
          {/* TODO: Included label for accessibility but need design. */}
          <LabelStyled htmlFor={label}>{label}</LabelStyled>
          <Spacer mb={1} />
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
  ),
);

export { SelectComponent };
