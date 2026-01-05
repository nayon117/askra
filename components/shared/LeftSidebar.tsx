"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

const LeftSidebar = () => {
    const pathname = usePathname();
  return (
    <section className="background-light900_dark200 left-0 top-0 light-border sticky flex  h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar">
      <div className="flex flex-1 flex-col gap-6">
      {sidebarLinks.map((link) => {
        const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
        return (
            <Link key={link.route} href={link.route}
            className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark-300_light900"} flex items-center gap-4 bg-transparent justify-start p-2`}
            >
              <Image
                src={link.imgURL}
                alt={`${link.label} Icon`}
                width={20}
                height={20}
                className={isActive ? "" : "invert-colors"}
              />
              <p className={`${isActive ? 'base-bold': 'base-medium'} max-lg:hidden`}>{link.label}</p>
            </Link>
        );
      })}
    </div>

      <SignedOut>
          <div className="flex flex-col gap-3 mt-6">
              <Link href="/sign-in">
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                    <Image 
                    src='/assets/icons/account.svg'
                    alt='Sign In Icon'
                    width={20}
                    height={20}
                    className="invert-colors mr-2 lg:hidden"
                    />
                  <span className="primary-text-gradient max-lg:hidden">Sign In</span>
                </Button>
              </Link>

              <Link href="/sign-up">
                <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark-400_light900 ">
                  <Image 
                    src='/assets/icons/sign-up.svg'
                    alt='Sign Up Icon'
                    width={20}
                    height={20}
                    className="invert-colors mr-2 lg:hidden"
                    />
                  <span className="max-lg:hidden">Sign Up</span>
                </Button>
              </Link>
          </div>
        </SignedOut>
    </section>
  );
};
export default LeftSidebar;
