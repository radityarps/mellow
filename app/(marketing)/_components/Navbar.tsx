import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="relative top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto  flex items-center w-full justify-between ">
        <Logo />
        <div className="md:block md:w-auto flex items-center justify-between w-full">
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
