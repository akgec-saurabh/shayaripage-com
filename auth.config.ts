import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
// import Resend from "next-auth/providers/resend";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google,
    // Resend({
    //   from: "admin@shayaripage.com",
    // }),
  ],
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/error",
  },
} satisfies NextAuthConfig;
