import Link from "next/link";
import Science from "public/science.svg";
import Comics from "public/comics.svg";
import Television from "public/television.svg";
import Sports from "public/sports.svg";
import Mythology from "public/mythology.svg";
import History from "public/history.svg";
import { FunctionComponent, Suspense, createElement } from "react";
import { Category } from "./types/Category";

const categories = {
  [Category.Science]: {
    title: "Science",
    icon: Science,
  },
  [Category.Comics]: {
    title: "Comics",
    icon: Comics,
  },
  [Category.Television]: {
    title: "Television",
    icon: Television,
  },
  [Category.Sports]: {
    title: "Sports",
    icon: Sports,
  },
  [Category.Mythology]: {
    title: "Mythology",
    icon: Mythology,
  },
  [Category.History]: {
    title: "History",
    icon: History,
  },
};

const CategoryItem = ({
  category,
  icon,
  title,
}: {
  category: string;
  icon: FunctionComponent<{ className: string }>;
  title: string;
}) => {
  return (
    <Link href={`/quiz?category=${category}`}>
      <div className="flex flex-col items-center justify-center h-28 bg-[#20486A] text-center rounded-md p-2 shadow-sm gap-2">
        {createElement(icon, { className: "h-8 w-8" })}
        <h3 className="font-semibold">{title}</h3>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <div className="bg-[#252B49] h-screen w-screen m-auto">
      <div className="flex flex-col w-full h-full font-semibold p-8 text-white space-y-8 md:max-w-lg m-auto">
        <div className="flex items-start justify-start flex-col">
          <h1 className="text-3xl font-semibold">{"Let's Play"}</h1>
          <h2 className="text-[#8E97BE] text-xl font-medium">
            Choose a category to start!
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 m-auto w-full">
          {Object.entries(categories).map(([category, { title, icon }]) => (
            <CategoryItem
              key={title}
              category={category}
              icon={icon}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
