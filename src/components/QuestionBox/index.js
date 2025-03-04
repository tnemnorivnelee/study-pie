import { useAtom, useAtomValue } from "jotai";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import answersState from "../../stores/answers/atom";
import questionsState from "../../stores/questions/atom";
import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

function QuestionBox() {
  const params = useParams();

  const step = parseInt(params.step);

  const questions = useAtomValue(questionsState);
  const [answers, setAnswers] = useAtom(answersState);

  const question = questions[step];
  const answer = answers[step];

  const setAnswer = (newAnswer) => {
    setAnswers((answers) => {
      const newAnswers = [...answers];
      newAnswers[step] = newAnswer;

      return newAnswers;
    });
  };

  return (
    <QuestionBoxWrapper>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      ></Body>
      <ActionButtons />
    </QuestionBoxWrapper>
  );
}

const QuestionBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default QuestionBox;
