const Option = (answer: string, correctAnswer: string) => {
  return (
    <div
      key={answer}
      className="flex items-center justify-between border-4 border-[#346899] text-[#346899] px-4 py-3 text-lg font-medium rounded-2xl touch-none"
    >
      {answer}
      <RadioGroup.Item
        value={answer}
        onClick={() => setSelectedAnswer(answer)}
        className={clsx(
          "border-[3px] border-[#346899] rounded-full p-1 w-8 h-8 flex items-center justify-center touch-none",
          {
            "!border-[#0C7FED] bg-[#0C7FED] text-white":
              selectedAnswer === answer,
            "!border-red-700 !bg-red-700": selectedAnswer === answer && isWrong,
          }
        )}
        id="c1"
      >
        <RadioGroup.Indicator className="touch-none ">
          <CheckIcon className="w-full h-full touch-none" />
        </RadioGroup.Indicator>
      </RadioGroup.Item>
    </div>
  );
};

export default Option;
