import InputLabel from "./input-label";
import CreateButton from "./create-button";

export default function Form() {
  return (
    <form className="flex justify-center items-center gap-x-2">
      <InputLabel />
      <CreateButton />
    </form>
  );
}
