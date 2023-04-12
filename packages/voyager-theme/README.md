# Voyager Chakra Theme

This is a custom theme for Chakra UI. It is a collection of colors, fonts, and styles that can be used to create a consistent look and feel for your application.

## Before You Install

You need to point your package manager to our private registry. You can do this by adding the following to your `.npmrc` file:

```sh
@strangelove-ventures:registry=https://npm.pkg.github.com
```

## Installation

```sh
pnpm i @strangelove-ventures/voyager-theme @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Usage

**NOTE:**
This package requires both of the fonts Futura and DM Sans to be present in your repo, either through Google Fonts or otherwise.

```tsx
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@strangelovelabs/voyager-theme";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
```
