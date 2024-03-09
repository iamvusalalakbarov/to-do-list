import InputLabel from "./input-label";
import CreateButton from "./create-button";

export default function Form({ className, value, onChange, onSubmit, inputLabelRef }) {
  return (
    <form
      className={`flex justify-center items-center gap-x-2 w-full ${className}`}
      onSubmit={onSubmit}
    >
      <InputLabel value={value} onChange={onChange} inputLabelRef={inputLabelRef} />
      <CreateButton />
    </form>
  );
}
