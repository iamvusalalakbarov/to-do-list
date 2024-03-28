import { getSession } from "@/lib";
import TodoLogo from "./components/todo-logo";
import ServerTasks from "./components/server-tasks";
import ClientTasks from "./components/client-tasks";

export default async function Home() {  
  const session = await getSession();

  return (
    <>
      <TodoLogo name={"to do"} className={"mt-16 mb-8 md:mb-12"} />
      {!!session?.user ? <ServerTasks user={session.user} /> : <ClientTasks />}
    </>
  );
}
