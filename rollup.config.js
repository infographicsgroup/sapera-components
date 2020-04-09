import typescript from "rollup-plugin-typescript2";
const pkg = require("./package.json");

export default {
  input: ["src/index.ts"],
  output: [{ file: pkg.main, format: "cjs", sourcemap: true }],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [typescript({ clean: true })],
};
