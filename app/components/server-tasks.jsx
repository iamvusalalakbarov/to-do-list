import CreateButton from "./create-button";
import TasksInfo from "./tasks-info";
import ServerTask from "./server-task";
import NoTasks from "./no-tasks";
import { createTask, fetchTasks } from "../lib/actions";

export default async function ServerTasks({ user }) {
  const tasks = await fetchTasks(user);

  return (
    <>
      <form
        className="flex justify-center items-center gap-x-2 w-full mb-16"
        action={async (formData) => {
          "use server";
          await createTask(formData, user);
        }}
      >
        <label className="block w-full md:w-[638px] p-4 rounded-lg border border-[#0D0D0D] bg-[#262626] focus-within:border-[#5E60CE]">
          <input
            name="content"
            placeholder="Add a new task"
            autoComplete="off"
            className="w-full bg-transparent outline-0 text-[#F2F2F2] placeholder:text-[#808080]"
          />
        </label>
        <CreateButton />
      </form>

      <div className="w-full md:w-[736px]">
        <TasksInfo className={"mb-6"} tasks={tasks} />
        {tasks?.length > 0 && (
          <ul className="flex flex-col gap-y-3 mb-8">
            {tasks.map((task) => (
              <ServerTask
                key={task.id}
                task={task}
              />
            ))}
          </ul>
        )}
        {tasks?.length == 0 && <NoTasks />}
      </div>
    </>
  );
}
