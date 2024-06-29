import { Logo } from "@/components/ui/Logo";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl xl:mx-16 2xl:mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="flex items-center gap-x-6">
          {/* Search */}
          {/* <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-48 transition-all ease-in-out px-3 text-sm py-1 border rounded-full focus:outline-none focus:ring-1 focus:ring-slate-500 sm:focus:w-[18rem] focus:w-full"
            />
          </div> */}

          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl={"/organization/:id"}
            afterSelectOrganizationUrl={"/organization/:id"}
            afterLeaveOrganizationUrl="/select-org"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            }}
          />

          <div className="flex items-center border shadow-sm rounded-full p-1">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: { avatarBox: { height: "30px", width: "30px" } },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
