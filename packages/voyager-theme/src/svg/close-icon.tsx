import * as React from "react";
import { SVGProps } from "react";
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 26 26" {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 21 21 5m0 16L5 5" />
  </svg>
);
export default SvgCloseIcon;
