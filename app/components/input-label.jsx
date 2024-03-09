export default function InputLabel({ value, onChange, inputLabelRef }) {
  return (
    <label
      ref={inputLabelRef}
      className="block w-full md:w-[638px] p-4 rounded-lg border border-[#0D0D0D] bg-[#262626] focus-within:border-[#5E60CE]"
    >
      <input
        type="text"
        placeholder="Add a new task"
        value={value}
        className="w-full bg-transparent outline-0 text-[#F2F2F2] placeholder:text-[#808080]"
        onChange={onChange}
      />
    </label>
  );
}
