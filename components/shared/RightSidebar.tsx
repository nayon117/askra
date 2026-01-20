import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const hotQuestions = [
  { _id: "1", title: "How to optimize React performance?" },
  {
    _id: "2",
    title: "What is the difference between var, let, and const in JavaScript?",
  },
  { _id: "3", title: "How to manage state in a React application?" },
  { _id: "4", title: "What are closures in JavaScript?" },
  { _id: "5", title: "How to implement authentication in a web app?" },
];

const popularTags = [
  { _id: "1", name: "JavaScript", totalQuestions: 5 },
  { _id: "2", name: "React", totalQuestions: 3 },
  { _id: "3", name: "CSS", totalQuestions: 4 },
  { _id: "4", name: "Node.js", totalQuestions: 2 },
  { _id: "5", name: "HTML", totalQuestions: 6 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 right-0 top-0 light-border sticky flex  h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[250px] custom-scrollbar">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/questions/${question._id}`}
              className="flex cursor-pointer justify-between items-center gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag 
            key={tag._id}
            _id ={tag._id}
            name={tag.name}
            totalQuestions={tag.totalQuestions}
            showCount={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RightSidebar;
