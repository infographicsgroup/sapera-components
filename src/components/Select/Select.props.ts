import React from "react";

const OPTIONS_DATA = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

type OptionType = Exclude<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
  value: string;
  label: string;
};

type DisabledUIProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
  hasDisabledUI?: boolean;
};

type WidthProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
  width?: number | string;
};

type SizeProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
  width?: number | string;
  size?: "large" | "medium";
};

type CustomSelectProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
  width?: number | string;
  size?: "large" | "medium";
  hasDisabledUI?: boolean;
};

type SelectComponentProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, "type"> & {
  className?: string;
  options: OptionType[];
  selectProps?: CustomSelectProps;
  placeholder?: string;
  label: string;
  width?: number | string;
  size?: "large" | "medium";
  hasDisabledUI?: boolean;
};

export { OPTIONS_DATA, OptionType, DisabledUIProps, WidthProps, SizeProps, CustomSelectProps, SelectComponentProps };
