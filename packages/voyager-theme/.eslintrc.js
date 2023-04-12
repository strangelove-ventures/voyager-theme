// @ts-check

const { extendEslint } = require("@strangelove-ventures/style-guide");

module.exports = extendEslint(["browser-node", "react", "tsup", "typescript"], {
  ignorePatterns: ["dist"],
  root: true,
});
