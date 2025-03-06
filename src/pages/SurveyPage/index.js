import { Suspense } from 'react';
import styled from 'styled-components';

import QuestionBox from '../../components/QuestionBox';
import ProgressIndicator from './../../components/ProgressIndicator/index';

function SurveyPage() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <SurveyPageWrapper>
        <ProgressIndicator />
        <QuestionBox />
      </SurveyPageWrapper>
    </Suspense>
  );
}

const SurveyPageWrapper = styled.div`
  width: 100%;
  min-height: 100%;
`;

export default SurveyPage;
