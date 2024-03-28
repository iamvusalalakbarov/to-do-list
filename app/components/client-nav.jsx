"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "./button";

export default function ClientNav() {
  const router = useRouter();
  const isLoginPage = router.pathname === "/log-in";
  const isSignUpPage = router.pathname === "/sign-up";

  return (
    <>
      {!isLoginPage && (
        <Link href={"/sign-up"}>
          <Button
            text="Sign Up"
            className={"w-24 h-12"}
            textClassName={"text-sm"}
          ></Button>
        </Link>
      )}
      {!isSignUpPage && (
        <Link href={"/log-in"}>
          <Button
            text="Log In"
            className={"w-24 h-12"}
            textClassName={"text-sm"}
          ></Button>
        </Link>
      )}
    </>
  );
}
