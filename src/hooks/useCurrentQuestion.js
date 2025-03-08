import { useAtomValue } from 'jotai';

import questionsState from '../stores/survey/surveyState';
import useStep from './useStep';

function useCurrentQuestion() {
  const step = useStep();
  const surveyData = useAtomValue(questionsState);
  const questions = surveyData?.questions || [];

  return questions[step];
}

export default useCurrentQuestion;
