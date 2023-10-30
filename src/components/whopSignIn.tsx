"use client";

import { signIn } from "next-auth/react";


import { Button } from "./ui/button";


function WhopSignIn() {
  return (
    <a  href={``}>
    <Button
      onClick={async () => await signIn("whop")}
      className="bg-blue-500 hover:bg-blue-500/80"
    >
      Sign in with Whop 
    </Button>
    </a>
  );
}

export default WhopSignIn;
