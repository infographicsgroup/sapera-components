const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.(ts|tsx|mdx)"],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]],
        },
      },
      {
        test: /\.tsx$/,
        include: path.resolve(__dirname, "../src"),
        loader: require.resolve("react-docgen-typescript-loader"),
        options: {
          tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
        },
      },
    );
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  addons: [
    "@storybook/addon-a11y/register",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
};
