import type { SVGProps } from "react";
import * as React from "react";

const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.143 1.5v3.143l-1.572.786L6.214 3.07 3.071 6.214 5.43 8.571l-.786 1.572H1.5v4.714h3.143l.786 1.572-2.358 2.357 3.143 3.143 2.357-2.358 1.572.786V23.5h4.714v-3.143l1.572-.786 2.357 2.358 3.143-3.143-2.358-2.357.786-1.572H23.5v-4.714h-3.143l-.786-1.572 2.358-2.357-3.143-3.143-2.357 2.358-1.572-.786V1.5h-4.714Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.5 15.643a3.143 3.143 0 1 0 0-6.286 3.143 3.143 0 0 0 0 6.286Z"
    />
  </svg>
);
export default SvgSettings;
