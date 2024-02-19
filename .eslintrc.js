// This configuration only applies to the package manager root.
module.exports = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@billim/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
