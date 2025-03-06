import axios from 'axios';
import { atom } from 'jotai';

const surveyState = atom(async () => {
  const res = await axios.get(
    `http://localhost:3001/surveys/${window.location.pathname.split('/')[2]}`
  );

  return res.data;
});

export default surveyState;
