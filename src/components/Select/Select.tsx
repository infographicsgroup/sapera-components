import React, { FC, useState } from "react";
// import styled from "styled-components";
import Select, { OptionProps, components } from "react-select";
import { Color } from "../../theme/util";
import { CaretIcon } from "../Icon/Icons";
import tickSVG from "../../images/tick.svg";

// interface SelectStyledProps {s
//   width?: string;
// }

// const SelectStyled = styled(Select)<SelectStyledProps>`
//   width: ${(p) => p.width};
// `;

export interface SelectProps extends OptionProps {
  size?: "large" | "medium";
}

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

// const TickIconComponent = (props) => {
//   return (
//     components.DropdownIndicator && (
//       <components.DropdownIndicator {...props}>
//         <TickIcon>
//       </components.DropdownIndicator>
//     )
//   );
// };

const fonts = () => ({
  fontFamily: "monospace",
  fontSize: "14px",
  fontWeight: "normal",
});

export const SelectComponent: FC<SelectProps> = ({ className, options, width, size = "large" }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<null>(null);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    // option: () => ({
    //   width: "100%",
    //   padding: "8px 14px",
    //   backgroundColor: state.isSelected ? `${Color.Primary}` : `${Color.Inverted}`,
    //   color: state.isFocus ? `${Color.Inverted}` : `${Color.Primary}`,
    // }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected || state.isFocused ? Color.Primary : Color.Inverted,
      color: state.isSelected || state.isFocused ? Color.TextInverted : Color.TextPrimary,
      padding: state.size === "large" ? "22px 25px" : "19px 25px",
      backgroundImage: state.isSelected ? `url(${tickSVG})` : "none",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 25px center",
    }),
    menu: () => ({
      border: `2px solid ${Color.Primary}`,
      maxWidth: "87%",
      backgroundColor: `${Color.Inverted}`,
      transform: "translateY(-2px)",
      boxShadow: "none",
      borderTopRightRadius: "none",
      borderTopLeftRadius: "none",
      margin: "0 auto",
      ...fonts(),
    }),
    control: (_, { selectProps: { width, size } }) => ({
      display: "flex",
      width: width,
      height: size === "large" ? 56 : 50,
      ...fonts(),
      border: `2px solid ${Color.BorderGrey}`,
      borderRadius: "6px",
      maxWidth: width,
      padding: "0 16px 0 24px",
    }),
    container: (_, { selectProps: { width } }) => ({
      maxWidth: width,
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
    }),
    menuList: () => ({}),
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
      size={size}
      styles={customStyles}
      value={selectedOption}
      width={width || 286}
      defaultMenuIsOpen
      onChange={handleChange}
    />
  );
};
