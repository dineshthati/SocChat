import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import connectDB from "./lib/db";
import User from "./models/user.model";
import { ReceiptEuroIcon } from "lucide-react";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Github({
      clientId: process.env.NEXT_CLIENT_ID,
      clientSecret: process.env.NEXT_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider == "github") {
        await connectDB();
        try {
          const user = await User.findOne({ email: profile?.email });
          if (!user) {
            const newUser = await User.create({
              username: profile?.login,
              fullName: profile?.name,
              email: profile?.email,
              profilePhotoUrl: profile?.avatar_url,
            });
            await newUser.save();
          }
          return true;
        } catch (error: any) {
          console.log(error.message);
        }
      }
      return false;
    },
  },
});
