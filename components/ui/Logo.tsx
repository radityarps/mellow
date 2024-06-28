import Link from "next/link";
import Image from "next/image";

export const Logo = ({ size = 120 }: { size?: number }) => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image src="/logo.svg" width={size} height={size} alt="logo" />
      </div>
    </Link>
  );
};
