import { SignIn } from "@clerk/nextjs";

export const generateMetadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return <SignIn routing="hash" />;
}
