import { sql } from "@vercel/postgres";

export async function fetchUsers() {
  try {
    const users = await sql`SELECT * FROM ToDoList_Users`;
    return users;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Users.");
  }
}

export async function getUser(username) {
  try {
    const user = await sql`
      SELECT * FROM ToDoList_Users where username=${username}
    `;
    return user.rows[0];
  } catch (error) {
    console.error("Failed to get user:", error);
    throw new Error("Failed to get user.");
  }
}
