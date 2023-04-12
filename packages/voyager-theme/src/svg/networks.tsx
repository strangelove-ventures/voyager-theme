import type { SVGProps } from "react";
import * as React from "react";

const SvgNetworks = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
    <path
      fill="currentColor"
      d="M20.944 8.085a.19.19 0 0 1 0-.08.169.169 0 0 1 0-.07v-.09l-.06-.15a.48.48 0 0 0-.09-.11l-.09-.08h-.05l-3.94-2.49-3.72-2.3a.85.85 0 0 0-.29-.15h-.08a.82.82 0 0 0-.27 0h-.1a1.13 1.13 0 0 0-.33.13l-7.47 4.65-.09.07-.09.08-.1.07-.05.06-.06.15v.15a.69.69 0 0 0 0 .2v8.73a1 1 0 0 0 .47.85l7.5 4.64.15.06h.08a.86.86 0 0 0 .52 0h.08l.15-.06 7.44-4.57a1 1 0 0 0 .47-.85v-8.73s.02-.07.02-.11Zm-8.49-3.35 1.78 1.1-5.59 3.46-1.79-1.1 5.6-3.46Zm-1 15-5.5-3.36v-6.39l5.5 3.4v6.35Zm1-8.11-1.91-1.15 5.59-3.47 1.92 1.19-5.6 3.43Zm6.5 4.72-5.5 3.42v-6.38l5.5-3.4v6.36Z"
    />
  </svg>
);
export default SvgNetworks;
