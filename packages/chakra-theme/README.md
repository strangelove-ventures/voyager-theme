# Voyager Chakra Theme

This is a custom theme for Chakra UI. It is a collection of colors, fonts, and styles that can be used to create a consistent look and feel for your application.

## Installation

```sh
pnpm i @strangelovelabs/voyager-theme @chakra-ui/react @emotion/react @emotion/styled framer-motion
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
