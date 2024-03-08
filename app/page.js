"use client";

import TodoLogo from "./components/todo-logo";
import Form from "./components/form";
import Tasks from "./components/tasks";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function setTasksInLocalStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function getTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  }

  useEffect(() => {
    const initialTasks = getTasksFromLocalStorage();
    setTasks(initialTasks);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
      const nextTasks = [
        ...tasks,
        {
          id: uuidv4(),
          content: trimmedValue,
          done: false,
        },
      ];

      setTasks(nextTasks);
      setTasksInLocalStorage(nextTasks);
      setValue("");
    }
  }

  function handleTaskClick(task) {
    const taskId = task.id;
    const nextTasks = tasks.map((t) => {
      if (t.id == taskId) {
        return { ...t, done: !t.done };
      }
      return t;
    });

    setTasks(nextTasks);
    setTasksInLocalStorage(nextTasks);
  }

  function handleTaskDelete(task) {
    const nextTasks = tasks.filter((t) => t.id != task.id);
    setTasks(nextTasks);
    setTasksInLocalStorage(nextTasks);
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
      <Tasks
        tasks={tasks}
        onTaskClick={handleTaskClick}
        onTaskDelete={handleTaskDelete}
      />
    </>
  );
}
