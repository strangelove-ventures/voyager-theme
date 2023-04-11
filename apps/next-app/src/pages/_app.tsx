import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@strangelove-ventures/voyager-theme";
// import { GlobalFonts } from "@/styles/fonts";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
