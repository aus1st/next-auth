import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import React from "react";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <section className="flex flex-col gap-6">
      <>
        <h2>Welcome {session.user?.name} on Server</h2>
      </>
    </section>
  );
};

export default page;
