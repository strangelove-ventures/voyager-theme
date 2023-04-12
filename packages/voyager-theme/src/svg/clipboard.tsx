import type { SVGProps } from "react";
import * as React from "react";

const SvgClipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.375}
      d="M14.906 7.344h1.719A1.375 1.375 0 0 1 18 8.719v8.937a1.375 1.375 0 0 1-1.375 1.375h-8.25A1.375 1.375 0 0 1 7 17.656V8.72a1.375 1.375 0 0 1 1.375-1.375h1.719m.344 5.5h4.124m-4.124 2.75h4.124M10.178 7.01A1.375 1.375 0 0 1 11.51 5.97h1.978a1.375 1.375 0 0 1 1.333 1.041l.428 1.709h-5.5l.427-1.709Z"
    />
  </svg>
);
export default SvgClipboard;
