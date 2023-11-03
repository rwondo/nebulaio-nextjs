"use client";

import { signIn } from "next-auth/react";


import { Button } from "./ui/button";
import Router from "next/router";
export function Callback() {
  const params = new URLSearchParams(window.location.search)
  const code = params.get('code')
}


function WhopSignIn() {
  return (
    <a  href={``}>
    <Button
      onClick={async () => Callback()}
      className="bg-blue-500 hover:bg-blue-500/80"
    >
      Sign in with Whop 
    </Button>
    </a>
  );
}

export default WhopSignIn;
