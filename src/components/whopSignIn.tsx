"use client";

import { signIn, signOut } from "next-auth/react";
import { FunctionComponent } from "react";

function WhopSignIn() {
  return (
    <a
      href="#"
      className="bg-blue-400 hover:bg-blue-500/70"
      onClick={() => (signIn("whop"))}
    >
    </a>
  );
};

export default WhopSignIn;
