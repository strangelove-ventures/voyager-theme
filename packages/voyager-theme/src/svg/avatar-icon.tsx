import * as React from "react";
import { SVGProps } from "react";
const SvgAvatarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
    <path
      fill="currentColor"
      d="M4.146 22S2.48 22 2.48 20.333c0-1.666 1.667-6.666 10-6.666 8.334 0 10 5 10 6.666C22.48 22 20.814 22 20.814 22H4.146Zm8.334-10a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </svg>
);
export default SvgAvatarIcon;
