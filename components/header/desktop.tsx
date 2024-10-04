"use client";

import React from "react";
import Logo from "@/components/header/logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { Search, User } from "lucide-react";
import { navItems } from "@/config/site";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import UserNav from "../user-nav";

interface DesktopHeaderProps {
  session: Session | null;
}
const DesktopHeader: React.FC<DesktopHeaderProps> = ({ session }) => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <React.Fragment>
      <div className="hidden items-center md:flex">
        <Logo />
      </div>
      <nav className="hidden space-x-4 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`rounded-md px-3 py-2 font-medium`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="hidden items-center space-x-4 md:flex">
        <Button variant="ghost" size="icon" aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
        {!!session?.user ? (
          <UserNav user={session.user} />
        ) : (
          <Button
            onClick={handleLogin}
            variant="ghost"
            size="icon"
            aria-label="User Profile"
          >
            <User className="h-5 w-5" />
          </Button>
        )}
      </div>
    </React.Fragment>
  );
};

export default DesktopHeader;
