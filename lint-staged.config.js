module.exports = {
  "./src/**/*.{ts,tsx}": ["yarn format", "yarn lint"],
  "./*.{config,setup}.{js,ts}": ["yarn format", "yarn lint"],
};
