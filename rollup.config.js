import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
const pkg = require("./package.json");

export default [
  // Typescript
  {
    input: ["src/index.ts"],
    output: [{ file: pkg.main, format: "cjs", sourcemap: true }],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [typescript({ clean: true })],
  },
  // Data type declarations
  {
    input: ["src/index.ts"],
    output: [{ file: pkg.types, format: "es" }],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    plugins: [dts()],
  },
];
