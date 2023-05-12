"use client";
import { SignUpButton } from "@/components/SignUpButton";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/dashboard");
  }

  const signUp = (social_media: string) => {
    if (social_media === "Google") {
    }
  };

  // useEffect(() => {
  //   console.log(session ? "true" : "false");
  //   if (session) {
  //     console.log("exe");
  //     router.push("/dashboard");
  //   }
  // }, []);
  return (
    <div className="flex flex-col justify-center items-center space-y-3">
      <h1 className="text-3xl font-bold">Social Media Login</h1>
      <div className="space-y-5">
        <SignUpButton
          onClick={() => signIn("google")}
          icon="./google.svg"
          title="Sign up with Google"
        />
        <SignUpButton
          onClick={() => signIn("twitter")}
          icon="./Twitter.svg"
          title="Sign up with Twitter"
        />
        <SignUpButton
          onClick={() => signIn("linkedin")}
          icon="./Linkedin.svg"
          title="Sign up with Linkedin"
        />
        <SignUpButton
          onClick={() => signIn("Facebook")}
          icon="./Facebook.svg"
          title="Sign up with Facebook"
        />
      </div>
    </div>
  );
}
