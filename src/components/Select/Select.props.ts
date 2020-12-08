import { ControlProps } from "../../form";

const OPTIONS_DATA = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

type OptionType = ControlProps<any> & {
  value: string;
  label: string;
};

type DisabledUIProps = ControlProps<any> & {
  hasDisabledUI?: boolean;
};

type WidthProps = ControlProps<any> & {
  width?: number | string;
};

type SizeProps = ControlProps<any> & {
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

export { OPTIONS_DATA, OptionType, DisabledUIProps, WidthProps, SizeProps, CustomSelectProps, SelectComponentProps };
