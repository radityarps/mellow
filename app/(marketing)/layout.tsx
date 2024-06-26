import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full bg-white">{children}</main>
    </div>
  );
};

export default MarketingLayout;
