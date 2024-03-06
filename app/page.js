import TodoLogo from "./ui/todo-logo";
import Form from "./ui/form";

export default function Home() {
  return (
    <>
      <TodoLogo className={"mt-16 mb-12"} />
      <Form />
    </>
  );
}
