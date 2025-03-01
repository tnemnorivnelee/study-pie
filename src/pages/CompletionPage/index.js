import { useAtomValue } from "jotai";
import styled from "styled-components";

import testWithComma from "../../stores/test/testWithComma";

function CompletionPage() {
  const test = useAtomValue(testWithComma);

  return <CompletionPageWrapper>{test}</CompletionPageWrapper>;
}

const CompletionPageWrapper = styled.div``;

export default CompletionPage;
