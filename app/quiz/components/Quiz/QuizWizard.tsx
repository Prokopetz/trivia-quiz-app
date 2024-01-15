"use client";
import { Question } from "@/app/hooks/getQuestions";
import clsx from "clsx";
import Link from "next/link";
import { useReducer } from "react";
import Trophy from "public/trophy.svg";

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
      <h3 className="text-[#9097b5d8] text-lg mb-2">
        Question {currentQuestion + 1} of 10
      </h3>
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

              setTimeout(() => {
                setState({
                  currentQuestion: nextQuestion,
                  answered: false,
                  selectedAnswer: "",
                });
              }, 1000); // Wait for 1 second before moving to the next question
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

  const getSummaryTitle = () => {
    if (score <= 3) {
      return "It wasn't this time 😕";
    }

    if (score >= 8) {
      return "You got it! 🎉";
    }

    return "Try again!";
  };

  const Summary = () => {
    return (
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-[#252B49] text-2xl font-semibold whitespace-pre-wrap break-words">
          {getSummaryTitle()}
        </h2>
        <Trophy className="w-24 h-24 stroke-white text-white" />
        <h3 className="text-black text-xl font-medium whitespace-pre-wrap break-words">
          You scored {score} out of 10
        </h3>
        <Link
          href={"/"}
          className="p-3 w-1/2 text-center border rounded-2xl bg-[#346899]"
        >
          Done
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col">
        {currentQuestion === questions.length ? <Summary /> : <Answer />}
      </div>
    </>
  );
};

export default QuizWizard;
