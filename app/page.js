import TodoLogo from "./components/todo-logo";
import Form from "./components/form";
import Tasks from "./components/tasks";

export default function Home() {
  return (
    <>
      <TodoLogo className={"mt-16 mb-12"} />
      <Form className={"mb-16"} />
      <Tasks />
    </>
  );
}
