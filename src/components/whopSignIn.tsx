"use client";

import { signIn } from "next-auth/react";


import { Button } from "./ui/button";
import Router from "next/router";



function WhopSignIn() {
  return (
    <a  href={``}>
    <Button
      onClick={async () => signIn("whop")}
      className="bg-blue-500 hover:bg-blue-500/80"
    >
      Sign in with Whop 
    </Button>
    </a>
  );
}

export default WhopSignIn;
