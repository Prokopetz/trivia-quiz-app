"use client";
import * as Checkbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowLeft, CheckIcon } from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";

const Quiz = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col justify-end bg-[#252B49] w-screen h-screen font-semibold text-white">
      <motion.div className="grid grid-cols-3 mb-auto items-center mx-2 my-4">
        <Link href="/">
          <ArrowLeft className="m-2" />
        </Link>
        <h1 className="text-center text-xl">Science</h1>
      </motion.div>

      <Suspense fallback={<h1 className="text-white">Loading</h1>}>
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: "0" }}
          transition={{ bounce: false, duration: 0.5 }}
          className="bg-white w-full rounded-t-3xl p-4 min-h-[80vh] grid grid-cols-1"
        >
          <div className="flex flex-col">
            <h3 className="text-[#8e97be] text-lg mb-2">Question 1 of 10</h3>
            <span className="border w-full border-dashed mb-4" />
            <h2 className="text-black text-2xl font-semibold">
              What is my name?
            </h2>
            <div
              className="grid grid-cols-1 gap-4 mt-24"
              onClick={() => setChecked(!checked)}
            >
              <div className="flex items-center justify-between border-4 border-[#346899] text-[#346899] px-4 py-3 text-lg font-medium rounded-2xl">
                My name is abacate
                <Checkbox.Root
                  onClick={() => setChecked(!checked)}
                  className={clsx(
                    "border-[3px] border-[#346899] rounded-full p-1 w-8 h-8 flex items-center justify-center",
                    { "border-[#0C7FED] bg-[#0C7FED] text-white": checked }
                  )}
                  id="c1"
                  checked={checked}
                >
                  <Checkbox.Indicator>
                    <CheckIcon className="w-full h-full" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </div>
              <div className="flex items-center justify-between border-4 border-[#346899] text-[#346899] px-4 py-3 text-lg font-medium rounded-2xl">
                My name is abacate
                <Checkbox.Root
                  onClick={() => setChecked(!checked)}
                  className={clsx(
                    "border-[3px] border-[#346899] rounded-full p-1 w-8 h-8 flex items-center justify-center",
                    { "border-[#0C7FED] bg-[#0C7FED] text-white": checked }
                  )}
                  id="c1"
                  checked={checked}
                >
                  <Checkbox.Indicator>
                    <CheckIcon className="w-full h-full" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </div>
              <div className="flex items-center justify-between border-4 border-[#346899] text-[#346899] px-4 py-3 text-lg font-medium rounded-2xl">
                My name is abacate
                <Checkbox.Root
                  onClick={() => setChecked(!checked)}
                  className={clsx(
                    "border-[3px] border-[#346899] rounded-full p-1 w-8 h-8 flex items-center justify-center",
                    { "border-[#0C7FED] bg-[#0C7FED] text-white": checked }
                  )}
                  id="c1"
                  checked={checked}
                >
                  <Checkbox.Indicator>
                    <CheckIcon className="w-full h-full" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </div>
              <div className="flex items-center justify-between border-4 border-[#346899] text-[#346899] px-4 py-3 text-lg font-medium rounded-2xl">
                My name is abacate
                <Checkbox.Root
                  onClick={() => setChecked(!checked)}
                  className={clsx(
                    "border-[3px] border-[#346899] rounded-full p-1 w-8 h-8 flex items-center justify-center",
                    { "border-[#0C7FED] bg-[#0C7FED] text-white": checked }
                  )}
                  id="c1"
                  checked={checked}
                >
                  <Checkbox.Indicator>
                    <CheckIcon className="w-full h-full" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </div>
            </div>
          </div>
          <button
            disabled={!checked}
            className={clsx(
              "border mt-24 mb-24 p-4 shadow-md rounded-3xl text-xl justify-self-center w-1/3 bg-gray-300 transition-all duration-100",
              {
                "border-[#0C7FED] !bg-[#0C7FED]": checked,
              }
            )}
          >
            Next
          </button>
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Quiz;
