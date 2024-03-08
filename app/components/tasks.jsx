"use client";

import TasksInfo from "./tasks-info";
import NoTasks from "./no-tasks";
import Task from "./task";

export default function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  return (
    <div className="w-[736px]">
      <TasksInfo className={"mb-6"} tasks={tasks} />
      {tasks.length > 0 && (
        <ul className="flex flex-col gap-y-3 mb-8">
          {tasks.map((task) => (
            <Task
              key={task.id}
              content={task.content}
              done={task.done}
              onClick={() => onTaskClick(task)}
              onDelete={() => onTaskDelete(task)}
            />
          ))}
        </ul>
      )}
      {tasks.length == 0 && <NoTasks />}
    </div>
  );
}
