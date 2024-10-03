import { auth } from "@/auth";
import SignIn from "@/components/sign-in";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      {session?.user?.name}
      {session?.user?.email}
      <SignIn />
    </div>
  );
}
