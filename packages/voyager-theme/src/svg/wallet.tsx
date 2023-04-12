import type { SVGProps } from "react";
import * as React from "react";

const SvgWallet = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 25" {...props}>
    <path
      fill="currentColor"
      d="M21.24 5H3.64a.83.83 0 0 1-.622-.293A1.073 1.073 0 0 1 2.76 4c0-.265.093-.52.258-.707A.83.83 0 0 1 3.64 3H18.6a.83.83 0 0 0 .622-.293c.165-.187.258-.442.258-.707 0-.265-.093-.52-.258-.707A.83.83 0 0 0 18.6 1H3.64c-.7.003-1.37.32-1.864.882S1.003 3.205 1 4v16c.003.795.282 1.556.776 2.118.495.562 1.165.879 1.864.882h17.6c.467 0 .914-.21 1.245-.586.33-.375.515-.884.515-1.414V7c0-.53-.185-1.04-.515-1.414A1.66 1.66 0 0 0 21.24 5Zm0 16H3.64a.83.83 0 0 1-.622-.293A1.073 1.073 0 0 1 2.76 20V6.825c.282.116.58.175.88.175h17.6v14Zm-5.28-7c0-.297.077-.587.223-.833.145-.247.35-.44.592-.553.241-.113.507-.143.763-.085.256.058.49.2.675.41.185.21.31.477.362.768.05.291.024.593-.075.867-.1.274-.27.508-.487.673a1.21 1.21 0 0 1-.733.253c-.35 0-.686-.158-.933-.44A1.61 1.61 0 0 1 15.96 14Z"
    />
  </svg>
);
export default SvgWallet;
