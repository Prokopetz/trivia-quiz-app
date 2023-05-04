"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import QuizComponent from "./components/Quiz/Quiz";
import { PageProps } from "@/.next/types/app/page";
import Spin from "public/spin.svg";
import { Category } from "../types/Category";

const Quiz = ({ searchParams }: PageProps) => {
  return (
    <div className="bg-[#252B49] h-screen w-screen">
      <div className="flex flex-col justify-end bg-[#252B49] w-screen h-screen font-semibold text-white select-none m-auto md:max-w-lg">
        <div className="grid grid-cols-3 mb-auto items-center mx-2 my-4">
          <Link href="/">
            <ArrowLeft className="m-2" />
          </Link>
          <h1 className="text-center text-xl">
            {Category[searchParams.category]}
          </h1>
        </div>
        <Suspense
          fallback={
            <div className="flex w-full h-full justify-center items-center gap-4 flex-col">
              <div className="h-8 w-8 animate-spin rounded-full border-4  border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              Loading...
            </div>
          }
        >
          {/* @ts-expect-error Server Component */}
          <QuizComponent category={searchParams.category} />
        </Suspense>
      </div>
    </div>
  );
};

export default Quiz;
