"use client";

import TasksInfo from "./tasks-info";
import NoTasks from "./no-tasks";
import Task from "./task";

const tasks = [
  {
    id: 1,
    content: "deneme",
    done: false,
  },
  {
    id: 2,
    content: "second",
    done: true,
  },
];

export default function Tasks() {
  return (
    <div className="w-[736px]">
      <TasksInfo className={"mb-6"} />
      <ul className="flex flex-col gap-y-3">
        {tasks.map((task) => (
          <Task key={task.id} content={task.content} done={task.done} />
        ))}
      </ul>
    </div>
  );
}
