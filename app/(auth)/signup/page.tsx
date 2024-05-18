import { signIn } from "@/auth";
import Signup from "@/components/Signup";

const page = () => {
  const signupHnadler = async () => {
    "use server";
    await signIn("github");
  };
  return (
    <form action={signupHnadler}>
      <Signup />
    </form>
  );
};

export default page;
