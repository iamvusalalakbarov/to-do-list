import TasksInfo from "./tasks-info";
import NoTasks from "./no-tasks";

export default function Tasks() {
  return (
    <div className="w-[736px]">
      <TasksInfo className={"mb-6"} />
      <NoTasks />
    </div>
  );
}
