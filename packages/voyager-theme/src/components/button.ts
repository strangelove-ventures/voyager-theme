import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  defaultProps: {
    variant: "primary",
  },
  variants: {
    primary: {
      colorScheme: "--chakra-colors-background",
    },
  },
};
