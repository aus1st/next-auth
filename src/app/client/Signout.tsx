"use client";
import { signOut } from "next-auth/react";
import React from "react";
import { redirect } from "next/navigation";

const Signout = () => {
  const logout = () => {
    signOut();
    redirect("http://localhost:3000/api/auth/signin/credentials");
  };
  return (
    <div>
      <button className="bg-black text-white p-2" onClick={logout}>
        Signout
      </button>
    </div>
  );
};

export default Signout;
