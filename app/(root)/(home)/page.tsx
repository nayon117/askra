import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";

// create 5 questions array of objects with _id, title, tags which is array of objects containing _id, and name then next author, upvotes,views, answers, createdAt
const questions = [
//   {
//     _id: "1",
//     title: "How to implement authentication in Next.js?",
//     tags: [
//       { _id: "t1", name: "Next.js" },
//       { _id: "t2", name: "Authentication" },
//     ],
//     author: "John Doe",
//     upvotes: 10,
//     views: 100,
//     answers: 2,
//     createdAt: new Date("2024-01-01"),
//   },
//     {
//     _id: "2",
//     title: "What is the difference between React and Angular?",
//     tags: [
//         { _id: "t3", name: "React" },
//         { _id: "t4", name: "Angular" },
//     ],
//     author: "Jane Smith",
//     upvotes: 15,
//     views: 150,
//     answers: 3,
//     createdAt: new Date("2024-02-01"),
//   },
//   {
//     _id: "3",
//     title: "How to manage state in React?",
//     tags: [
//         { _id: "t5", name: "React" },
//         { _id: "t6", name: "State Management" },
//     ],
//     author: "Alice Johnson",
//     upvotes: 20,
//     views: 200,
//     answers: 5,
//     createdAt: new Date("2024-03-01"),
//   },
]

const HomePage = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">Ask a Question</Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar 
        route = '/'
        iconPosition = 'left'
        imgSrc = '/assets/icons/search.svg'
        placeholder = 'Search for questions...'
        otherClasses = 'flex-1'
        />

        <Filter
        filters = {HomePageFilters}
        otherClasses = 'min-h-[56px] sm:min-w-[170px]'
        containerClasses = "hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex flex-col w-full gap-6">
        {questions.length > 0 ? questions.map((question)=>(
            'QuestionCard'
        )) : <NoResult
        title="No Questions Found"
        link = "/ask-question"
        linkTitle = "Ask a Question"
        />}
      </div>
    </>
  );
};
export default HomePage;
