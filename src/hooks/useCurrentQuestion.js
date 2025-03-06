import axios from 'axios';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

import questionsState from '../stores/survey/surveyState';
import useStep from './useStep';
import useSurveyId from './useSurveyId';

function useCurrentQuestion() {
  const step = useStep();
  const surveyId = useSurveyId();

  const [surveyData, setSurveyData] = useAtom(questionsState);
  const questions = surveyData?.questions || [];

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/surveys/${surveyId}`).then((res) => {
  //     console.log(res);
  //     setSurveyData(res.data);
  //   });
  // }, [surveyId, setSurveyData]);

  return questions[step];
}

export default useCurrentQuestion;
