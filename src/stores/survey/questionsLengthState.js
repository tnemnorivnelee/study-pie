import axios from 'axios';
import { atomWithQuery } from 'jotai-tanstack-query';

import getSurvey from '../../services/apis/getSurvey';

const questionsLengthState = atomWithQuery(() => ({
  queryKey: ['surveyData'],
  queryFn: async () => {
    try {
      const res = await getSurvey(window.location.pathname.split('/')[2]);
      // console.log(res.data?.questions?.length);
      return res.data?.questions?.length ?? 0; // 방어 코드 추가 (questions가 없을 경우 0 반환)
    } catch (error) {
      console.error('❌ 설문 데이터를 가져오는 중 오류 발생:', error);
      return 0; //  오류 발생 시 기본값 0 반환
    }
  },
  suspense: true, // Suspense 활성화하여 로딩 상태 자동 처리
}));

export default questionsLengthState;
