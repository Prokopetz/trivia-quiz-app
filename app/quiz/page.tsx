"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import QuizComponent from "./components/Quiz/Quiz";

const Quiz = () => {
  return (
    <div className="flex flex-col justify-end bg-[#252B49] w-screen h-screen font-semibold text-white select-none">
      <div className="grid grid-cols-3 mb-auto items-center mx-2 my-4">
        <Link href="/">
          <ArrowLeft className="m-2" />
        </Link>
        <h1 className="text-center text-xl">Science</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <QuizComponent />
      </Suspense>
    </div>
  );
};

export default Quiz;
