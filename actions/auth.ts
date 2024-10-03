"use server";

import { signIn } from "@/auth";

export const loginWithGoogle = async () => {
  await signIn("google", { redirectTo: "/" });
};

export const loginWithMagicLink = async () => {
  await signIn("resend", { redirectTo: "/" });
};
