import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import useStep from "../../hooks/useStep";
import questionsLengthState from "../../stores/questions/questionsLengthState";
import Button from "../Button";

function ActionButtons() {
  const step = useStep();

  const questionsLength = useAtomValue(questionsLengthState);

  const isLast = questionsLength - 1 === step;
  const navigate = useNavigate();

  return (
    <ActionButtonsWrapper>
      {step === 0 || (
        <Button
          type="TERTIARY"
          onClick={() => {
            navigate(`${step - 1}`);
          }}
        >
          이전
        </Button>
      )}
      {isLast ? (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate("/done");
          }}
        >
          제출
        </Button>
      ) : (
        <Button
          type="PRIMARY"
          onClick={() => {
            navigate(`${step + 1}`);
          }}
        >
          다음
        </Button>
      )}
    </ActionButtonsWrapper>
  );
}

const ActionButtonsWrapper = styled.div`
  margin-top: 72px;
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export default ActionButtons;
