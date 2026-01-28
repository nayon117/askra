import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { IQuestion } from "@/database/question.model";
import { getQuestionsByTagId } from "@/lib/actions/tag.action";
import { URLProps } from "@/types";



const TagDetailsPage = async ({ params, searchParams }: URLProps) => {
  const { id } = await params;
  const result = await getQuestionsByTagId({
    tagId: id,
    page: 1,
    searchQuery: searchParams.q,
  });

  console.log("Tag Details Page Result:", result);

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">{result?.tagTitle}</h1>

      <div className="mt-11 w-full">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for tag questions..."
          otherClasses="flex-1"
        />
      </div>
      <div className="mt-10 flex flex-col w-full gap-6">
        {result?.questions && result.questions.length > 0 ? (
          result.questions.map((question: IQuestion) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="No Tag Questions Found"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};
export default TagDetailsPage;
