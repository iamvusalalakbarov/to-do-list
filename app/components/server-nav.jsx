import { logout } from "@/lib";
import { redirect } from "next/navigation";
import Button from "./button";

async function handleLogout() {
  "use server";
  await logout();
  redirect("/");
}

export default function ServerNav({ user }) {
  return (
    <>
      <pre className="text-white">{user.username}</pre>
      <form action={handleLogout}>
        <Button
          text="Log Out"
          className={"w-24 h-12"}
          textClassName={"text-sm"}
        ></Button>
      </form>
    </>
  );
}
