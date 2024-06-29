import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const Font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Navbar = () => {
  return (
    <div className="relative top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl xl:mx-16 2xl:mx-auto  flex items-center w-full justify-between ">
        <Logo />
        <div
          className={cn(
            "md:w-auto flex items-center gap-x-2 justify-between w-full",
            Font.className
          )}
        >
          <Button size={"sm"} variant={"ghost"} asChild>
            <Link href={"/sign-in"}>Log In</Link>
          </Button>
          <Button size={"sm"} asChild>
            <Link href={"/sign-up"}>Sign Up for Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
