import { AnswerFilters } from "@/constants/filter";
import Filter from "./Filter";
import { getAnswers } from "@/lib/actions/answer.action";
import Link from "next/link";
import Image from "next/image";
import { getTimeStamps } from "@/lib/utils";
import ParseHTML from "./ParseHTML";
import Votes from "./Votes";

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
  page?: number;
  filter?: string;
}

const AllAnswers = async ({ questionId, userId, totalAnswers }: Props) => {
  const result = await getAnswers({ questionId });
  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3 className="primary-text-gradient">{totalAnswers} Answers</h3>

        <Filter filters={AnswerFilters} />
      </div>
      {/* Answers List */}
      <div className="">
        {result?.answers.map((answer) => (
          <article key={answer._id} className="light-border border-b py-10">
            <div className="flex items-center justify-between">
              <div className="mb-8 flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
                <Link
                  href={`/profile/${answer.author.clerkId}`}
                  className="flex flex-1 items-start sm:items-center gap-1 mb-4"
                >
                  <Image
                    src={answer.author.picture}
                    alt="author picture"
                    width={18}
                    height={18}
                    className="rounded-full object-cover max-sm:mt-0.5"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <p className="body-semibold text-dark-300_light700">
                      {answer.author.name}
                    </p>
                    <p className="small-regular text-light400_light500 mt-0.5 line-clamp-1 ml-0.5">
                      <span className="max-sm:hidden">-</span>
                      answered {getTimeStamps(answer.createdAt)}
                    </p>
                  </div>
                </Link>
                <div className="flex justify-end">
                  <Votes
                    type="answer"
                    itemId={JSON.stringify(answer?._id)}
                    userId={JSON.stringify(userId)}
                    upvotes={answer?.upvotes.length || 0}
                    hasupVoted={answer.upvotes.includes(userId)}
                    downvotes={answer?.downvotes.length || 0}
                    hasdownVoted={answer.downvotes.includes(userId)}
                  />
                </div>
              </div>
            </div>
            <ParseHTML data={answer.content} />
          </article>
        ))}
      </div>
    </div>
  );
};
export default AllAnswers;
