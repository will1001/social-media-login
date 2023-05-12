import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
        ? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
        : "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        ? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        : "",
    }),
    TwitterProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID
        ? process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID
        : "",
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
        ? process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
        : "",
    }),
    LinkedInProvider({
      clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID
        ? process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID
        : "",
      clientSecret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET
        ? process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET
        : "",
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID
        ? process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID
        : "",
      clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET
        ? process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET
        : "",
    }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
};
export default NextAuth(authOptions);
