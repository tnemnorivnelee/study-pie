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
      options: {
        placeholder: "placeholder 입니다.",
      },
    },
    {
      title: "질문2",
      desc: "설명2",
      type: "textarea",
      required: true,
      options: {
        placeholder: "placeholder 입니다.",
      },
    },
    {
      title: "질문3",
      desc: "설명3",
      type: "select",
      required: true,
      options: {
        items: ["답변1", "답변2", "답변3", "답변4", "답변5"],
      },
    },
  ];

  const step = parseInt(params.step);

  const [answers, setAnswers] = useState([]);

  // console.log(answers);

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
