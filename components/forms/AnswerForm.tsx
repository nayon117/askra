"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { AnswerSchema } from "@/lib/validations";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "@tinymce/tinymce-react";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const AnswerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const editorRef = useRef(null);
  const form = useForm<z.infer<typeof AnswerSchema>>({
    resolver: zodResolver(AnswerSchema),
    defaultValues: {
      answer: "",
    },
  });

  const handleCreateAnswer = (data: z.infer<typeof AnswerSchema>) => {
    setIsSubmitting(true);
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col justify-between sm:flex-row sm:items-center sm:gap-2">
        <h4 className="paragraph-semibold text-dark400_light800">Write Your Answer here</h4>
        <Button className="btn light-border gap-1.5 px-4 py-2.5 text-primary-500 shadow-none dark:text-primary-100"
        onClick={() => {}}
        >
            <Image
            src="/assets/icons/stars.svg"
            alt="star icon"
            width={12}
            height={12}
            className="object-contain"
            />
            Generate an AI Answer
        </Button>
      </div>

      <Form {...form}>
        <form
          className="mt-6 gap-10 flex w-full flex-col"
          onSubmit={form.handleSubmit(handleCreateAnswer)}
        >
          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormControl className="mt-3.5">
                  {/* TODO: Add an editor component*/}
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                    onInit={(_evt, editor) => (editorRef.current = editor)}
                    initialValue=""
                    onBlur={field.onBlur}
                    onEditorChange={(content) => field.onChange(content)}
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "codesample",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "codesample | bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist",
                      content_style:
                        "body { font-family:Inter; font-size:16px }",
                      skin: "oxide-dark",
                    }}
                  />
                </FormControl>
                <FormMessage className="text-red-900" />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button
              type="submit"
              className="primary-gradient w-fit text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Answer"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default AnswerForm;
