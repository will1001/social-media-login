"use client";

import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
  const { data: session } = useSession();

  const router = useRouter();

  if (!session) {
    router.push("/");
  }

  // useEffect(() => {
  //   if (session) {
  //     router.push("/");
  //   }
  // }, []);
  return (
    <>
      <div>
        {/* <img className="" src={session ? session?.user?.image : ""} /> */}
        <div>Hello,{session?.user?.name}</div>
        <div>Your email : {session?.user?.email}</div>
        <button
          onClick={() => {
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    </>
  );
};

export default Home;
