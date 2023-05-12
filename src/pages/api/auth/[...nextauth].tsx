import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import LinkedInProvider from "next-auth/providers/linkedin";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "340034863655-6pch9s4hni3ghfm5acgabrnbcc8cpodh.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    TwitterProvider({
      clientId: "OVhMOUR2MXRkTUZHSmtFYzd1Wkg6MTpjaQ",
      clientSecret: "HJfoZ4hcjGT2iMfrxC9nRsIe0WwMXy-boH-jEwJSQhTeTYO8bs",
    }),
    LinkedInProvider({
      clientId: "86cxd5ijv3ffnm",
      clientSecret: "MkpwQs4gikS3kxca"
    }),
    FacebookProvider({
      clientId: "119373611150621",
      clientSecret: "044ac586b0881e099bfd63c311480fe1"
    })
  ],
};
export default NextAuth(authOptions);
