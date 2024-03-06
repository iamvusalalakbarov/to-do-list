export default function InputLabel() {
  return (
    <label className="block w-[638px] p-4 rounded-lg border border-[#0D0D0D] bg-[#262626]">
      <input
        type="text"
        placeholder="Add a new task"
        className="w-full bg-transparent outline-0 text-[#F2F2F2] placeholder:text-[#808080]"
      />
    </label>
  );
}
