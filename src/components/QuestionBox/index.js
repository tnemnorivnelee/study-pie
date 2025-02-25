import ActionButtons from "../ActionButtons";
import Body from "../Body";
import Desc from "../Desc";
import Title from "../Title";

function QuestionBox({ question, questionsLength, step, answer, setAnswer }) {
  return (
    <div>
      <Title>{question.title}</Title>
      <Desc>{question.desc}</Desc>
      <Body
        type={question.type}
        answer={answer}
        setAnswer={setAnswer}
        options={question.options}
      ></Body>
      <ActionButtons questionsLength={questionsLength} step={step} />
    </div>
  );
}

export default QuestionBox;
