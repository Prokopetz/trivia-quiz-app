import { Question } from "@/app/hooks/getQuestions";
import clsx from "clsx";
import { useReducer } from "react";

const initialState = {
  currentQuestion: 0,
  score: 0,
  answered: false,
  selectedAnswer: "",
};

const reducer = (
  state: typeof initialState,
  action: Partial<typeof initialState>
) => ({ ...state, ...action });

const QuizWizard = ({ questions }: { questions: Question[] }) => {
  const [{ answered, currentQuestion, score, selectedAnswer }, setState] =
    useReducer(reducer, initialState);

  const Answer = () => (
    <>
      <span className="border w-full border-dashed mb-4" />
      <h2 className="text-black text-2xl font-semibold whitespace-pre-wrap break-words">
        {questions[currentQuestion]?.question}
      </h2>

      <div className="grid grid-cols-1 gap-4 mt-24">
        {questions[currentQuestion].answers.map((answer) => (
          <div
            onClick={() => {
              if (answered) {
                return;
              }

              setState({ answered: true, selectedAnswer: answer });

              if (answer === questions[currentQuestion].correctAnswer) {
                setState({ score: score + 1 });
              }

              const nextQuestion = currentQuestion + 1;
              if (nextQuestion < questions.length) {
                setTimeout(() => {
                  setState({
                    currentQuestion: nextQuestion,
                    answered: false,
                    selectedAnswer: "",
                  });
                }, 1000); // Wait for 1 second before moving to the next question
              }
            }}
            key={answer}
            className={clsx(
              "flex items-center justify-between bg-[#346899] text-white whitespace-pre px-4 py-3 text-lg font-medium rounded-2xl touch-none shadow-md",
              {
                "!bg-red-700":
                  answered &&
                  answer === selectedAnswer &&
                  answer !== questions[currentQuestion].correctAnswer,
              },
              {
                "!bg-green-700":
                  answered &&
                  answer === selectedAnswer &&
                  answer === questions[currentQuestion].correctAnswer,
              }
            )}
          >
            {answer}
          </div>
        ))}
      </div>
    </>
  );

  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-[#9097b5d8] text-lg mb-2">
          Question {currentQuestion + 1} of 10
        </h3>
        <Answer />
      </div>
    </>
  );
};

export default QuizWizard;
