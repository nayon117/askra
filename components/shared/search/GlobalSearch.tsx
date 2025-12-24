import { Input } from "@/components/ui/input";
import Image from "next/image";

const GlobalSearch = () => {
  return (
    <div className="w-full relative max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search icon"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Input 
        type="text"
        placeholder="search globally..."
        defaultValue=""
        readOnly
        className="paragraph-regular no-focus placeholder background-light800_darkgradient shadow-none outline-none"
        />
      </div>
    </div>
  );
};
export default GlobalSearch;
