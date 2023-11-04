"use client";

import { signIn, signOut } from "next-auth/react";
import { FunctionComponent } from "react";

const WhopSignIn: FunctionComponent<{
  loggedIn?: boolean;
  children: any;
}> = ({ loggedIn = false, children }) => {
  return (
    <a
      href="#"
      className="bg-blue-400 hover:bg-blue-500/70"
      onClick={() => (loggedIn ? signOut() : signIn("whop"))}
    >
      {children}
    </a>
  );
};

export default WhopSignIn;
