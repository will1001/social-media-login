import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";

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
    LinkedInProvider({
      clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID
        ? process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID
        : "",
      clientSecret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET
        ? process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET
        : "",
    }),
    DiscordProvider({
      clientId: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID
        ? process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID
        : "",
      clientSecret: process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET
        ? process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET
        : "",
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
        ? process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
        : "",
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
        ? process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
        : "",
    }),
  ],
  secret: process.env.NEXT_PUBLIC_NEXT_AUTH_SECRET,
};
export default NextAuth(authOptions);
