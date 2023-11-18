"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client");
    },
  });
  return (
    <section>
      <h2 className="text-2xl">Welcome {session?.user?.name} on Client</h2>

      
    </section>
  );
};

export default ClientPage;
