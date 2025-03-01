import { atom } from "jotai";

import testState from "./atom";

const testWithComma = atom((get) => {
  const abcdArr = get(testState);

  return abcdArr.join(",");
});

export default testWithComma;
