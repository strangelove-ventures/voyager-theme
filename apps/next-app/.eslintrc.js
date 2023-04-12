// @ts-check

const { extendEslint } = require("@strangelove-ventures/style-guide");

module.exports = extendEslint(["browser-node", "next", "react", "typescript"], {
  root: true,
});
