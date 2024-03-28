"use client";

import AddTaskForm from "./add-task-form";
import Tasks from "./tasks";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ClientTasks() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const taskInputRef = useRef(null);
  const localStorageKey = "tasks";

  function setTasksInLocalStorage(tasks) {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));
  }

  function getTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem(localStorageKey);
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

    taskInputRef.current.focus();
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
      <AddTaskForm
        value={value}
        onInputChange={(e) => setValue(e.target.value)}
        onSubmit={handleSubmit}
        taskInputRef={taskInputRef}
      />
      <Tasks
        tasks={tasks}
        onTaskClick={handleTaskClick}
        onTaskDelete={handleTaskDelete}
      />
    </>
  );
}
