type DataAttributeProps = {
  [x: string]: unknown;
  props?: unknown;
};

/**
 * Filter props
 */
const dataAttributeProps = (props: DataAttributeProps) =>
  Object.keys(props)
    .filter((key) => key.startsWith("data-") || key === "className")
    .reduce((result, key) => {
      result[key] = props[key];

      return result;
    }, {} as { [x: string]: unknown });

export { dataAttributeProps };

export type { DataAttributeProps };
