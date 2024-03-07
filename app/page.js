"use client";

import TodoLogo from "./components/todo-logo";
import Form from "./components/form";
import Tasks from "./components/tasks";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialTasks = [];

export default function Home() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState(initialTasks);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          content: trimmedValue,
          done: false,
        },
      ]);

      setValue("");
    }
  }

  return (
    <>
      <TodoLogo className={"mt-16 mb-12"} />
      <Form
        className={"mb-16"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => handleSubmit(e)}
      />
      <Tasks tasks={tasks} />
    </>
  );
}
