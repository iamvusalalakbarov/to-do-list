"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { getUser } from "./app/lib/data";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

const secretKey = process.env.AUTH_SECRET;
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .sign(key);
}

export async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const loggedUser = await getUser(username);

  if (!loggedUser || !(await bcrypt.compare(password, loggedUser.password))) {
    console.log("Invalid username or password");
    return null;
  }

  const user = {
    id: loggedUser.id,
    username: loggedUser.username,
  };

  const session = await encrypt({ user });
  cookies().set("session", session, { httpOnly: true });

  redirect("/");
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
