import { Global } from "@emotion/react";

export const GlobalFonts = () => {
  return (
    <Global
      styles={`
      @font-face {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/DMSans/DMSans-Regular.woff) format('woff'),
             url(/assets/fonts/DMSans/DMSans-Regular.woff2) format('woff2');
      }


      @font-face {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(/assets/fonts/DMSans/DMSans-Medium.woff) format('woff'),
             url(/assets/fonts/DMSans/DMSans-Medium.woff2) format('woff2');
      }

      @font-face {
        font-family: 'DM Sans';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url(/assets/fonts/DMSans/DMSans-Bold.woff) format('woff'),
             url(/assets/fonts/DMSans/DMSans-Bold.woff2) format('woff2');
      }

      @font-face {
        font-family: 'Futura';
        font-style: bold;
        font-weight: 700;
        font-display: swap;
        src: url(/assets/fonts/Futura/FuturaLT-Bold.woff) format('woff'),
             url(/assets/fonts/Futura/FuturaLT-Bold.woff2) format('woff2');
      }

      @font-face {
        font-family: 'Futura';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/Futura/FuturaLT.woff) format('woff'),
             url(/assets/fonts/Futura/FuturaLT.woff2) format('woff2');
      }
    `}
    />
  );
};
