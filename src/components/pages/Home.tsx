import Container from "../atoms/Container";
import QuizContainer from "../organisms/QuizContainer.tsx";
import QuizesList from "../organisms/QuizesList.tsx";
import {useState} from "react";
import QuizModel from "../../data/QuizModel.ts";

const Home = () => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizModel>(null);
  const [isDoingQuiz, setIsDoingQuiz] = useState(false);

  const startQuiz = (quiz: QuizModel) => {
    setIsDoingQuiz(true);
    setSelectedQuiz(quiz);
  };

  const resetQuiz = () => {
    setIsDoingQuiz(false);
    setSelectedQuiz(null);
  };

  return (
    <Container.Base width="100%" padding="3rem">
      {isDoingQuiz == false ?
        <QuizesList handleStartQuiz={startQuiz} />
        :       <QuizContainer quiz={selectedQuiz} handleLeave={resetQuiz} />
      }
    </Container.Base>
  );
};

export default Home;