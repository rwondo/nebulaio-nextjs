import { NextAuthOptions, Session } from "next-auth";


import { WhopProvider } from "./whop-provider";

export const authConfig: NextAuthOptions = {
  providers: [
    WhopProvider({
      clientId: process.env.WHOP_ID!,
      clientSecret: process.env.WHOP_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET
};