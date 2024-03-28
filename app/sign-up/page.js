import TodoLogo from "../components/todo-logo";
import RegistrationInput from "../components/registration-input";
import Button from "../components/button";
import { createUser } from "../lib/actions";
import { getSession } from "@/lib";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const session = await getSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <>
      <TodoLogo name={"sign up"} className={"mt-16 mb-8 md:mb-12"} />
      <form action={createUser} className="flex flex-col gap-y-4 mt-10">
        <RegistrationInput
          type={"text"}
          name={"username"}
          placeholder={"Define a username"}
        />
        <RegistrationInput
          type={"password"}
          name={"password"}
          placeholder={"Choose a password"}
        />
        <RegistrationInput
          type={"password"}
          name={"password2"}
          placeholder={"Repeat the password"}
        />
        <Button type="submit" text="Sign Up" textClassName={"text-lg"}></Button>
      </form>
    </>
  );
}
