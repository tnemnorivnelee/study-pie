import { useState } from "react";
import { useParams } from "react-router-dom";

import QuestionBox from "../../components/QuestionBox";
import ProgressIndicator from "./../../components/ProgressIndicator/index";

function SurveyPage() {
  const params = useParams();
  console.log(params);
  const questions = [
    {
      title: "질문1",
      desc: "설명1",
      type: "text",
      required: false,
      options: {},
    },
    {
      title: "질문2",
      desc: "설명2",
      type: "text",
      required: true,
      options: {},
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);
  return (
    <>
      <ProgressIndicator />
      <QuestionBox
        question={questions[step]}
        questionsLength={questions.length}
        step={step}
        answer={answers[step]}
        setAnswer={(newAnswer) => {
          setAnswers((answers) => {
            const newAnswers = [...answers];
            newAnswers[step] = newAnswer;
            return newAnswers;
          });
        }}
      />
    </>
  );
}

export default SurveyPage;
