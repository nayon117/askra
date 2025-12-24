"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navcontents = () => {
    const pathname = usePathname()
  return (
    <section className="flex flex-col h-full gap-6 pt-8">
      {sidebarLinks.map((link) => {
        const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
        return (
          <SheetClose asChild key={link.route}>
            <Link href={link.route}
            className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark-300_light900"} flex items-center gap-4 bg-transparent justify-start p-2`}
            >
              <Image
                src={link.imgURL}
                alt={`${link.label} Icon`}
                width={20}
                height={20}
                className={isActive ? "" : "invert-colors"}
              />
              <p className={`${isActive ? 'base-bold': 'base-medium'}`}>{link.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="Menu Icon"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.svg"
            alt="Askra Logo"
            width={23}
            height={23}
          />
          <p className="h2-bold text-dark-100_light900 font-spaceGrotesk">
            Askra
          </p>
        </Link>
        <SheetClose asChild>
          <Navcontents />
        </SheetClose>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href="/sign-in">
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
                  <span className="primary-text-gradient">Sign In</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/sign-up">
                <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none text-dark-400_light900 ">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
