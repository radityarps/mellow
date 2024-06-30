import { Sidebar } from "./_components/Sidebar";
import { Navbar } from "./_components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="pt-16 md:pt-20 px-4 max-w-6xl 2xl:max-w-screen-xl mx-auto flex">
        <div className="flex gap-x-7 w-full">
          <div className="w-64 shrink-0 hidden md:block">
            <Sidebar />
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
