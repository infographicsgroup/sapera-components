module.exports = {
  "./{src,.storybook}/**/*.{ts,tsx,js,jsx}": ["yarn format", "yarn lint"],
  "./*.{js,ts}": ["yarn format ./*.{js,ts}", "yarn lint ./*.{js,ts}"],
};
