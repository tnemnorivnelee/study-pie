import { selectAtom } from "jotai/utils";

import questionsState from "./atom";

const questionsLengthState = selectAtom(
  questionsState,
  (questions) => questions.length
);

export default questionsLengthState;
