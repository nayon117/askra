import { SearchX } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  title: string;
  link: string;
  linkTitle: string;
}


const NoResult = ({ title, link, linkTitle }:Props) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted shadow-sm">
        <SearchX className="h-10 w-10 text-muted-foreground" />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight">
        {title}
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">
        We searched the archives, asked the silence, and found nothing that
        matches your question. This doesn’t mean your question is wrong — it
        means it hasn’t been asked yet.
      </p>

      <div className="my-6 h-px w-24 bg-border" />
      <Link href={link}>
        <Button className="rounded-lg bg-primary-500 px-4 py-3 text-sm font-medium text-white shadow transition hover:opacity-90">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
