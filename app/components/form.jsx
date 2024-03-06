import InputLabel from "./input-label";
import CreateButton from "./create-button";

export default function Form({ className }) {
  return (
    <form className={`flex justify-center items-center gap-x-2 ${className}`}>
      <InputLabel />
      <CreateButton />
    </form>
  );
}
