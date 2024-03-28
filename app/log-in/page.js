import TodoLogo from "../components/todo-logo";
import LoginForm from "../components/login-form";
import { getSession } from "@/lib";
import { redirect } from "next/navigation";

export default async function LogIn() {
  const session = await getSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <>
      <TodoLogo name={"log in"} className={"mt-16 mb-8 md:mb-12"} />
      <LoginForm />
    </>
  );
}
