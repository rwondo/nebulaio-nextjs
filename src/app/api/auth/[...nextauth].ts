import { authOptions } from "@/app/lib/sdk/auth";
import NextAuth from "next-auth";

export default NextAuth(authOptions);