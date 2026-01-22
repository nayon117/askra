import AnswerForm from "@/components/forms/AnswerForm";
import Metric from "@/components/shared/Metric";
import ParseHTML from "@/components/shared/ParseHTML";
import RenderTag from "@/components/shared/RenderTag";
import { getQuestionById } from "@/lib/actions/question.action";
import { formatNumber, getTimeStamps } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const QuestionDetailsPage = async ({ params }: Props) => {
  const { id } = await params;
  const result = await getQuestionById({ questionId: id });
  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse sm:flex-row sm:items-center justify-between gap-5 sm:gap-2">
          <Link
            href={`/profile/${result?.author?.clerkId}`}
            className="flex items-center justify-start gap-1"
          >
            <Image
              src={result.author?.picture}
              alt="author picture"
              className="rounded-full"
              width={22}
              height={22}
            />
            <p className="paragraph-semibold text-dark-300_light700">
              {result?.author?.name}
            </p>
          </Link>
          <div className="flex justify-end">voting</div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {result?.title}
        </h2>
      </div>
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl="/assets/icons/clock.svg"
          alt="clock icon"
          value={` -asked ${getTimeStamps(result?.createdAt)}`}
          title="Asked"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="messages"
          value={formatNumber(result?.answers.length)}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatNumber(result?.views)}
          title="Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
      <ParseHTML data={result?.content} />
      <div className="mt-8 flex flex-wrap gap-2">
        {result?.tags.map((tag: { _id: string; name: string }) => (
          <RenderTag
            key={tag._id}
            _id={tag._id}
            name={tag.name}
            showCount={false}
          />
        ))}
      </div>
      <AnswerForm />
    </>
  );
};
export default QuestionDetailsPage;
