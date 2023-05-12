"use client";
import { SignUpButton } from "@/components/SignUpButton";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session]);

  return (
    <div className="flex justify-center items-center h-[100vh] space-y-7">
      <div className="bg-white rounded-xl p-5">
        <h1 className="text-3xl font-bold">Social Media Login</h1>
        <div className="space-y-5">
          <SignUpButton
            onClick={() => signIn("google")}
            icon="./google.svg"
            title="Sign up with Google"
          />
          <SignUpButton
            onClick={() => signIn("linkedin")}
            icon="./linkedin.svg"
            title="Sign up with Linkedin"
          />
          <SignUpButton
            onClick={() => signIn("discord")}
            icon="./discord.svg"
            title="Sign up with Discord"
          />
          <SignUpButton
            onClick={() => signIn("slack")}
            icon="./slack.svg"
            title="Sign up with Slack"
          />
        </div>
      </div>
    </div>
  );
}
