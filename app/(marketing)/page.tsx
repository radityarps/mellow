import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Montserrat } from "next/font/google";
const Font = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MarketingPage = () => {
  return (
    <div className="flex w-full h-full md:px-[5rem] px-10 items-center overflow-hidden">
      <div
        className={cn(
          "flex flex-col justify-center gap-y-[3rem] md:max-w-[52%] max-w-[95%]  ",
          Font.className
        )}
      >
        <h1 className="2xl:text-[3.7rem] font-bold sm:text-[2.5rem] text-[1.7rem]">
          Organize your life with ease and efficiency
        </h1>
        <p className="2xl:text-xl sm:text-base text-xs">
          Welcome to our platform where you can manage tasks, collaborate with
          teams, and stay organized.
        </p>
        <Link href="/sign-up" className="w-fit">
          <Button variant={"link"} className="flex gap-x-2 w-fit p-0">
            Get Started <MoveRight size={16} />
          </Button>
        </Link>
      </div>
      <div className="bg-gray-300 w-[50rem] h-[27rem] relative -right-[6rem] rounded-xl -rotate-2 md:flex hidden"></div>
    </div>
  );
};

export default MarketingPage;
