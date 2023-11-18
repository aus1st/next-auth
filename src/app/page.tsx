import { getServerSession } from "next-auth";
import Image from "next/image";
import { options } from "./api/auth/[...nextauth]/options";
import Signout from "./client/Signout";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main>
      {session ? (
        <>
          <h2 className="text-2xl">Welcome {session.user?.name}</h2>
          <Signout />
        </>
      ) : (
        redirect("http://localhost:3000/api/auth/signin/credentials")
      )}
    </main>
  );
}
