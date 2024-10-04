import { auth } from "@/auth";
import DesktopHeader from "./desktop";
import MobileHeader from "./mobile";
import { Session } from "next-auth";

export default async function Header() {
  const session: Session | null = await auth();

  return (
    <header className={`sticky top-0 z-50 w-full bg-background shadow`}>
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <MobileHeader session={session} />
          <DesktopHeader session={session} />
        </div>
      </div>
    </header>
  );
}
