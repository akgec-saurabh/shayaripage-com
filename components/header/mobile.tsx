"use client";
import React from "react";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/header/logo";
import { navItems, socialLinks } from "@/config/site";
import { Session } from "next-auth";
import UserNav from "../user-nav";
import { useRouter } from "next/navigation";

interface MobileHeaderProps {
  session: Session | null;
}
const MobileHeader: React.FC<MobileHeaderProps> = ({ session }) => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  return (
    <div className="flex w-full container items-center justify-between md:hidden">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className={`sm:w-[400px]"} w-[300px]`}>
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium`}
                onClick={() => setIsSheetOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex items-center space-x-4">
            <Button variant="outline" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8 flex items-center space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </Button>
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <Logo />

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
  );
};

export default MobileHeader;
