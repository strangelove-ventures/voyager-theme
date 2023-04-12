import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { components } from "./components";
import { styles } from "./styles";
import { fonts, fontSizes } from "./typography";

export * from "./svg";

export const theme = extendTheme({
  colors,
  components,
  fonts,
  fontSizes,
  styles,
});
