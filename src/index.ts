import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { fonts } from "./typography";

export const theme = extendTheme({
  colors,
  components,
  fonts,
});
