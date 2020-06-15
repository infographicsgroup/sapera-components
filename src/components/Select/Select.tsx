import React, { FC, useState } from "react";
import Select, { OptionProps } from "react-select";

export type SelectProps = OptionProps;

export const SelectComponent: FC<SelectProps> = ({ className, options }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<null>(null);

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };
  return <Select className={className} options={options} value={selectedOption} onChange={handleChange} />;
};
