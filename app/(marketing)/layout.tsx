import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-[90%] bg-white">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
