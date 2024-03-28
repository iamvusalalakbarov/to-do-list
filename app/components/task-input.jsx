export default function TaskInput({ taskInputRef, value, onInputChange }) {
  return (
    <label
      ref={taskInputRef}
      className="block w-full md:w-[638px] p-4 rounded-lg border border-[#0D0D0D] bg-[#262626] focus-within:border-[#5E60CE]"
    >
      <input
        value={value}
        onChange={onInputChange}
        placeholder="Add a new task"
        autoComplete="off"
        className="w-full bg-transparent outline-0 text-[#F2F2F2] placeholder:text-[#808080]"
      />
    </label>
  );
}
