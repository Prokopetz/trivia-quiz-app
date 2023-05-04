import Link from "next/link";
import Science from "public/science.svg";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#252B49] w-screen h-screen font-semibold p-8 text-white space-y-8">
      <div className="flex items-start justify-start flex-col">
        <h1 className="text-3xl font-semibold">{"Let's Play"}</h1>
        <h2 className="text-[#8E97BE] text-xl font-medium">
          Choose a category to start!
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 m-auto w-full">
        <Link href="/quiz?category=Science">
          <div className="flex flex-col items-center justify-center bg-[#20486A] text-center rounded-md p-4 shadow-sm">
            <Science className="w-20 h-20" />
            Science
          </div>
        </Link>

        <div className="flex flex-col items-center justify-center bg-[#20486A] text-center rounded-md p-4">
          <Science className="w-20 h-20" />
          Science
        </div>
        <div className="flex flex-col items-center justify-center bg-[#20486A] text-center rounded-md p-4">
          <Science className="w-20 h-20" />
          Science
        </div>
        <div className="flex flex-col items-center justify-center bg-[#20486A] text-center rounded-md p-4">
          <Science className="w-20 h-20" />
          Science
        </div>
      </div>
    </div>
  );
}
