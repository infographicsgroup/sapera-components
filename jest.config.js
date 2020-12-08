const tsconfig = require("./tsconfig.json");
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/jest.svgTransform.js",
  },
  moduleNameMapper,
};
