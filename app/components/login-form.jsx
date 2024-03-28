import RegistrationInput from "./registration-input";
import Button from "./button";
import { login } from "@/lib";

export default async function LoginForm() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await login(formData);
      }}
      className="flex flex-col gap-y-4 mt-10"
    >
      <RegistrationInput type={"text"} name={"username"} placeholder={"Username"} />
      <RegistrationInput
        type={"password"}
        name={"password"}
        placeholder={"Password"}
      />
      <Button type="submit" text="Log In" textClassName={"text-lg"}></Button>
    </form>
  );
}
