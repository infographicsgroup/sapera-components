import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
const pkg = require("./package.json");

// Only package.json dependencies section is considered internal, other dependencies should be external/excluded
const externalDependencies = [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})];

export default [
  // Typescript
  {
    input: ["src/index.ts"],
    output: [{ file: pkg.main, format: "cjs", sourcemap: true }],
    external: externalDependencies,
    plugins: [typescript({ clean: true })],
  },
  // Data type declarations
  {
    input: ["src/index.ts"],
    output: [{ file: pkg.types, format: "es" }],
    external: externalDependencies,
    plugins: [dts()],
  },
];
