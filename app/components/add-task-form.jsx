"use client";

import TaskInput from "./task-input";
import CreateButton from "./create-button";

export default function AddTaskForm({
  className,
  value,
  onInputChange,
  onSubmit,
  taskInputRef,
}) {
  return (
    <form
      className="flex justify-center items-center gap-x-2 w-full mb-16"
      onSubmit={onSubmit}
    >
      <TaskInput
        taskInputRef={taskInputRef}
        value={value}
        onInputChange={onInputChange}
      />
      <CreateButton />
    </form>
  );
}
