"use server";

import { sql } from "@vercel/postgres";
import { fetchUsers, getUser } from "./data";
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function trimUsername(username) {
  username = username.trim();
  username = username.replace(/\s+/g, "");
  return username;
}

export async function createUser(formData) {
  const users = await fetchUsers();
  const [username, password, password2] = [
    formData.get("username"),
    formData.get("password"),
    formData.get("password2"),
  ];

  const lowercasedUsername = username.toLowerCase();
  const trimmedUsername = trimUsername(lowercasedUsername);

  if (
    trimmedUsername.length === 0 ||
    password.length === 0 ||
    password !== password2
  ) {
    console.error("Error.");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const isUsernameExists = users.rows.some(
    (user) => user.username === trimmedUsername
  );

  if (isUsernameExists) {
    console.error("Error.");
    return;
  }

  try {
    await sql`
        INSERT INTO ToDoList_Users (username, password)
        VALUES (${trimmedUsername}, ${hashedPassword})
    `;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to Create User.");
  }

  revalidatePath("/sign-up");
  redirect("/log-in");
}

export async function createTask(formData, user) {
  const content = formData.get("content");
  const trimmedContent = content.trim();

  if (trimmedContent.length === 0) {
    return;
  }

  if (user) {
    try {
      await sql`
          INSERT INTO ToDoList_Tasks (content, user_id)
          VALUES (${trimmedContent}, ${user.id})
      `;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to Create Task.");
    }
  }

  revalidatePath("/");
}

export async function fetchTasks(user) {
  try {
    const tasks =
      await sql`SELECT * FROM ToDoList_Tasks WHERE user_id=${user.id} ORDER BY id`;
    return tasks.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Tasks.");
  }
}

export async function updateTask(task) {
  try {
    await sql`
      UPDATE ToDoList_Tasks
      SET done = ${!task.done}
      WHERE id = ${task.id}
    `;
  } catch (e) {
    throw new Error("Failed to update task.");
  }

  revalidatePath("/");
}

export async function removeTask(task) {
  try {
    await sql`DELETE FROM ToDoList_Tasks WHERE id = ${task.id}`;
  } catch (e) {
    throw new Error("Failed to remove task.");
  }

  revalidatePath("/");
}