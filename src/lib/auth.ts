import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import type { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "24446641-e3slpk5bb60hr2ufvemdi262sf1uj7pa.apps.googleusercontent.com",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.membership = token.membership as string;
      }
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        // User could have a membership field in db
        const dbUser = await db.user.findUnique({
          where: { email: user.email! },
        });
        token.membership = dbUser?.membership || "FREE";
      }

      // Update membership in token if triggered by a session update
      if (trigger === "update" && session?.membership) {
        token.membership = session.membership;
      }
      return token;
    },
  },
};
