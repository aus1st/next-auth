import { getServerSession } from "next-auth";
import Image from "next/image";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main>
      {session ? (
        <h2 className="text-2xl">Welcome {session.user?.name}</h2>
      ) : (
        <h2 className="text-2xl">Please login</h2>
      )}
    </main>
  );
}
