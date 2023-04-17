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
    secondary: {
      backgroundColor: "#7DA47E",
      color: "pistachio.300",
      _hover: {
        backgroundColor: "#4C654D",
      },
      _disabled: {
        backgroundColor: "#1F2C1F",
        color: "#658465",
      },
    },
  },
};
