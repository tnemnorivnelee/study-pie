import { useAtomValue } from "jotai";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import questionsState from "../../stores/questions/atom";
import Button from "../Button";

function ActionButtons() {
  const params = useParams();
  const step = parseInt(params.step);

  const questions = useAtomValue(questionsState);
  const questionsLength = questions.length;

  const navigate = useNavigate();
  const isLast = questionsLength - 1 === step;

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
