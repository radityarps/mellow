import { auth } from "@clerk/nextjs/server";
import { Navbar } from "../../_components/Navbar";

const OrganizationPage = () => {
  const { userId, orgId } = auth();

  return <div className="h-full w-full">Ogranization Page</div>;
};

export default OrganizationPage;
