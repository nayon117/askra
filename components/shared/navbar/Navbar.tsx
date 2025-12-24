import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="Askra Logo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-spaceGrotesk text-primary-500 max-sm:hidden">
          Askra
        </p>
      </Link>
      <GlobalSearch/>
      <div className="flex-between gap-5">
        <Theme />

        <SignedIn>
          <UserButton
            afterSwitchSessionUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10 rounded-full",
              },
              variables: {
                colorPrimary: "#5f1878",
              },
            }}
          />
        </SignedIn>
        <MobileNav/>
      </div>
    </nav>
  );
};
export default Navbar;
