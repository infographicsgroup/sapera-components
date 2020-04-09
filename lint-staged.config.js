module.exports = {
  "./src/**/*.{ts,tsx}": ["yarn format", "yarn lint:fix"],
  "./*.{config,setup}.{js,ts}": ["yarn format", "yarn lint:fix"],
};
