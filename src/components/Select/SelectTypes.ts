import { OptionTypeBase } from "react-select";

export interface OptionType extends OptionTypeBase {
  value: string;
  label: string;
}

export interface DisabledUIProps {
  hasDisabledUI?: boolean;
}

export interface WidthProps {
  width?: number | string;
}

export interface SizeProps extends WidthProps {
  size?: "large" | "medium";
}

export interface CustomSelectProps extends SizeProps, WidthProps, DisabledUIProps {}

export interface SelectComponentProps extends SizeProps, DisabledUIProps {
  className?: string;
  options: OptionType[];
  selectProps?: CustomSelectProps;
  placeholder?: string;
  label: string;
}
