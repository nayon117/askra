import QuestionForm from "@/components/forms/QuestionForm";
import { getQuestionById } from "@/lib/actions/question.action";
import { getUserById } from "@/lib/actions/user.action";
import { ParamsProps } from "@/types";
import { auth } from "@clerk/nextjs/server";

const Edit = async ({params}:ParamsProps) => {
    const {userId} = await auth() 
    const {id} = await params;
    if(!userId) return null;
    const mongoUserId = await getUserById({userId})
    const result = await getQuestionById({questionId: id})

    return (
        <>
           <h1 className="h1-bold text-dark100_light900">Edit Question</h1>

           <div className="mt-9">
            <QuestionForm
            type = "edit"
            mongoUserId={mongoUserId._id}
            questionDetails = {JSON.stringify(result)}
            />
           </div>
        </>
    )
}
export default Edit;
