import { signIn } from "@/auth";
import React from "react";

export default function SignIn() {
  return (
    <React.Fragment>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </React.Fragment>
  );
}
