import { shuffle, unescape } from "lodash";
import { Category } from "../types/Category";

export interface Question {
  category: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

const API_URL = "https://opentdb.com/api.php";

const cleanString = (str: string) => {
  return unescape(str)
    .replaceAll(/&quot;/g, '"')
    .replaceAll(/&#039;/g, "'")
    .replaceAll(/&rsquo;/g, "'");
};

const getQuestions = ({ category }: { category: Category }) => {
  const promise = fetch(`${API_URL}?amount=10&type=multiple&difficulty=easy&category=${category}`)
    .then((res) => res.json())
    .then((res) =>
      res.results.map(
        (question: {
          incorrect_answers: string[];
          question: string;
          category: string;
          correct_answer: string;
        }) => {
          const answers = question.incorrect_answers.map((incorrect) =>
            cleanString(incorrect)
          );
          const correctAnswer = cleanString(question.correct_answer);
          answers.push(correctAnswer);

          const shuffledAnswers = shuffle(answers);

          return {
            category: cleanString(question.category),
            question: cleanString(question.question),
            correctAnswer: correctAnswer,
            answers: shuffledAnswers,
          };
        }
      )
    ) as Promise<Question[]>;

  return promise;
};

export default getQuestions;
