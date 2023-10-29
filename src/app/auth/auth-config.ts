import { NextAuthOptions, Session } from "next-auth";


import { WhopProvider } from "./whop-provider";

export const authConfig: NextAuthOptions = {
  providers: [
    WhopProvider({
      clientId: process.env.WHOP_ID!,
      clientSecret: process.env.WHOP_SECRET!,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id as string;
      return session;
    },
  },
  session: {
    strategy: "database",
  },
  secret: process.env.NEXTAUTH_SECRET
};