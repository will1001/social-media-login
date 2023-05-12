"use client";

import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session) {
      console.log(session);
      router.push("/");
    }
  }, [session]);
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col justify-center items-center text-xl">
        <img
          className="rounded-full"
          src={session?.user?.image ? session?.user?.image : ""}
        />
        <div>Hello,{session?.user?.name}</div>
        <div>Your email : {session?.user?.email}</div>
        <div
          className="border border-black bg-white p-3 rounded-xl cursor-pointer"
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default Page;
