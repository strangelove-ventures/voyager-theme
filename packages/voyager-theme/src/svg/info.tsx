import * as React from "react";
import { SVGProps } from "react";
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
    <path
      fill="currentColor"
      d="M12.5 6.25a.75.75 0 0 0 0 1.5v-1.5Zm.011 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2.211 2.9a.75.75 0 0 0 0 1.5v-1.5Zm2.2.75h.75a.75.75 0 0 0-.75-.75v.75Zm-.75 5.5a.75.75 0 0 0 1.5 0h-1.5Zm-1.45-.75a.75.75 0 0 0 0 1.5v-1.5Zm4.4 1.5a.75.75 0 0 0 0-1.5v1.5Zm8.05-5.15c0 5.66-4.59 10.25-10.25 10.25v1.5c6.49 0 11.75-5.26 11.75-11.75h-1.5ZM12.5 22.75c-5.66 0-10.25-4.59-10.25-10.25H.75c0 6.49 5.26 11.75 11.75 11.75v-1.5ZM2.25 12.5c0-5.66 4.59-10.25 10.25-10.25V.75C6.01.75.75 6.01.75 12.5h1.5ZM12.5 2.25c5.66 0 10.25 4.59 10.25 10.25h1.5C24.25 6.01 18.99.75 12.5.75v1.5Zm0 5.5h.011v-1.5H12.5v1.5Zm-2.2 4.4h2.2v-1.5h-2.2v1.5Zm1.45-.75v5.5h1.5v-5.5h-1.5Zm-1.45 6.25h4.4v-1.5h-4.4v1.5Z"
    />
  </svg>
);
export default SvgInfo;
