// @ts-check
const { extendEslint } = require("@strangelovelabs/style-guide");

module.exports = extendEslint(["browser-node", "next", "react", "typescript"], {
  root: true,
});
