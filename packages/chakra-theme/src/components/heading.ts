import { defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  baseStyle: {
    fontFamily: "heading",
    fontWeight: "bold",
    letterSpacing: 0,
  },
  sizes: {
    "4xl": {
      fontSize: ["6xl", null, "7xl"],
      lineHeight: 1.2,
    },
    "3xl": {
      fontSize: ["5xl", null, "6xl"],
      lineHeight: 1.2,
    },
    "2xl": {
      fontSize: ["4xl", null, "5xl"],
      lineHeight: 1.2,
    },
    xl: {
      fontSize: ["3xl", null, "4xl"],
      lineHeight: 1.2,
    },
    lg: {
      fontSize: ["2xl", null, "3xl"],
      lineHeight: 1.2,
    },
    md: {
      fontSize: ["xl", null, "2xl"],
      lineHeight: 1.2,
    },
    sm: {
      fontSize: ["lg", null, "xl"],
      lineHeight: 1.2,
    },
    xs: {
      fontSize: ["md", null, "lg"],
      lineHeight: 1.2,
    },
  },
  variants: {
    h1: {
      size: "4xl",
    },
    h2: {
      size: "2xl",
    },
    h3: {
      size: "xl",
    },
    h4: {
      size: "lg",
    },
  },
  defaultProps: {
    size: "2xl",
  },
});
