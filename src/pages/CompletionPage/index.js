import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import congrats from '../../asset/congrats.png';
import reload from '../../asset/reload.png';
import Button from '../../components/Button';
import useSurveyId from '../../hooks/useSurveyId';

function CompletionPage() {
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <CompletionPageWrapper>
      <img src={congrats} alt='' width='209' height='204' />
      <MidText>설문이 완료되었습니다.</MidText>

      <ReloadButton
        type='TERTIARY'
        onClick={() => {
          navigate(`/survey/${surveyId}/0`);
        }}
      >
        <img src={reload} alt='' width='24' height='24' />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrapper>
  );
}

const CompletionPageWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const MidText = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 56px;
`;

const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export default CompletionPage;
