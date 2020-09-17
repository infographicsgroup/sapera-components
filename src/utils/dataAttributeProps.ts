export interface DataAttributePropsType {
  [x: string]: unknown;
  props?: unknown;
}

const dataAttributeProps = (props: DataAttributePropsType) => {
  const newProps: { [key: string]: unknown } = {};

  Object.keys(props).forEach((key) => {
    if (key.startsWith("data-") || key === "className") newProps[key] = props[key];
  });

  return newProps;
};

export default dataAttributeProps;
