import { useState } from "react";

import ProgressIndicator from "./components/ProgressIndicator";
import QuestionBox from "./components/QuestionBox";

function App() {
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

  const step = 1;

  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
