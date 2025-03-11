import { useAtomValue } from 'jotai';
import styled from 'styled-components';

import useAnswers from '../../hooks/useAnswers';
import useStep from '../../hooks/useStep';
import questionsLengthState from '../../stores/survey/questionsLengthState';
import Bar from '../Bar';

function ProgressIndicator() {
  const length = useAtomValue(questionsLengthState).data;
  const [answers] = useAnswers();
  const step = useStep();

  const bars = [];

  for (let i = 0; i < length; i++) {
    let status = 'pending';

    if (i === step) {
      status = 'in-progress';
    } else if (answers[i]) {
      status = 'done';
    }

    bars.push(<Bar key={i} status={status} />);
  }

  return (
    <ProgressIndicatorWrapper>
      {bars}
      <PageCount>
        <span>{step + 1}</span>/{length}
      </PageCount>
    </ProgressIndicatorWrapper>
  );
}

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: calc(100% + 24px);
  left: 0;
  width: 100%;
  align-items: center;
  gap: 8px;
`;

const PageCount = styled.div`
  margin-left: 8px;
  color: #636262;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  span {
    color: #121111;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export default ProgressIndicator;
