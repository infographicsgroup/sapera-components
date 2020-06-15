import React, { FC, useState } from "react";
// import styled from "styled-components";
import Select, { OptionProps, components } from "react-select";
import { Color } from "../../theme/util";
import { CaretIcon } from "../Icon/Icons";

// interface SelectStyledProps {s
//   width?: string;
// }

// const SelectStyled = styled(Select)<SelectStyledProps>`
//   width: ${(p) => p.width};
// `;

export type SelectProps = OptionProps;

const DropdownIndicator = (props) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <CaretIcon />
        {/* <FontAwesomeIcon icon={props.selectProps.menuIsOpen ? "caret-up" : "caret-down"} /> */}
      </components.DropdownIndicator>
    )
  );
};

export const SelectComponent: FC<SelectProps> = ({ className, options, width }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<null>(null);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    option: () => ({
      width: "100%",
      display: "block!important",
      padding: "8px 14px",
    }),
    menu: () => ({
      border: `2px solid ${Color.BorderGrey}`,
      maxWidth: "400px",
      // borderTopColor: `${Color.White}`,
      boxShadow: "none",
      borderTopRightRadius: "none",
      borderTopLeftRadius: "none",
      fontFamily: "monospace",
      fontSize: "14px",
      fontWeight: "normal",
    }),
    control: (_: any, { selectProps: { width } }: any) => ({
      display: "flex",
      width: width,
      fontFamily: "monospace",
      fontSize: "14px",
      fontWeight: "normal",
      border: `2px solid ${Color.BorderGrey}`,
      borderRadius: "6px",
      maxWidth: "400px",
      padding: "6px 14px 8px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    // singleValue: (provided, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = "opacity 300ms";

    //   return { ...provided, opacity, transition };
    // },
  };
  return (
    <Select
      className={className}
      components={{ DropdownIndicator }}
      options={options}
      styles={customStyles}
      value={selectedOption}
      width={width || "100%"}
      onChange={handleChange}
    />
  );
};
