"use client";
import { Question } from "@/app/hooks/getQuestions";
import { motion } from "framer-motion";
import QuizWizard from "./QuizWizard";

const Quiz = ({ categoryResource }: { categoryResource: {read: () => Question[]} }) => {
  const questions = categoryResource.read();

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

export default Quiz;
