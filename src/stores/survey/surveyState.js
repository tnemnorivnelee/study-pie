import { atom } from 'jotai';

import getSurvey from '../../services/apis/getSurvey';

const surveyState = atom(async () => {
  const res = await getSurvey(window.location.pathname.split('/')[2]);

  return res.data;
});

export default surveyState;
