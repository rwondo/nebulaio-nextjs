"use client";


import { Button } from "./ui/button";


function WhopSignIn() {
  return (
    <a  href={`https://whop.com/oauth?client_id=HgONl0Vt_TTNkAGyyuML2m5FmuZicv5_RDRQt3kBVVE&redirect_uri=https://nebulasoftwares.co/oauth/callback`}>
    <Button
      className="bg-blue-500 hover:bg-blue-500/80"
    >
      Sign in with Whop 
    </Button>
    </a>
  );
}

export default WhopSignIn;
