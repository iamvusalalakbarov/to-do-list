import { getSession } from "@/lib";
import ServerNav from "./server-nav";
import ClientNav from "./client-nav";

export default async function Nav() {
  const session = await getSession();

  return (
    <nav className="flex items-center gap-x-2 absolute top-0 right-0 p-2">
      {!!session?.user ? <ServerNav user={session.user} /> : <ClientNav />}
    </nav>
  );
}
