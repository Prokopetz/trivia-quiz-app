"use client";
import getQuestions, { Category, Question } from "@/app/hooks/getQuestions";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as RadioGroup from "@radix-ui/react-radio-group";
import clsx from "clsx";
import { motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { useReducer, useState } from "react";

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

  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-[#9097b5d8] text-lg mb-2">
          Question {currentQuestion + 1} of 10
        </h3>
        <span className="border w-full border-dashed mb-4" />
        <h2 className="text-black text-2xl font-semibold whitespace-pre-wrap">
          {questions[currentQuestion]?.question}
        </h2>

        <div className="grid grid-cols-1 gap-4 mt-24">
          {questions[currentQuestion].answers.map((answer) => (
            <div
              onClick={() => {
                if (answered) {
                  return; // User has already answered the question, do nothing
                }

                setState({ answered: true, selectedAnswer: answer }); // Mark the question as answered

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
                } else {
                  // End of the quiz
                  // You can show a summary of the quiz here or redirect to another page
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
      </div>
    </>
  );
};

const Quiz = async () => {
  const questions = await getQuestions({ category: Category.Science });

  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: "0" }}
      transition={{ bounce: false, duration: 0.5 }}
      className="bg-white w-full rounded-t-3xl p-4 h-[90vh] grid grid-cols-1"
    >
      <QuizWizard questions={questions}></QuizWizard>
    </motion.div>
  );
};

function shuffle(array: string[]) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default Quiz;
