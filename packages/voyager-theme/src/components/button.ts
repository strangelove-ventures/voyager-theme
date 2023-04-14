import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  defaultProps: {
    variant: "primary",
  },
  variants: {
    primary: {
      backgroundColor: "pistachio.400",
      color: "black",
      _hover: {
        backgroundColor: "pistachio.400",
      },
      _disabled: {
        backgroundColor: "#5C8562",
      },
    },
  },
};
