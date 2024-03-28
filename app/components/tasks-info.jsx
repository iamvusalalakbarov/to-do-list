export default function TasksInfo({ className, tasks }) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <p className="flex justify-center items-center gap-x-2 font-bold text-sm text-[#4EA8DE]">
        Tasks created
        <span className="py-0.5 px-2 rounded-full font-bold text-xs text-[#D9D9D9] bg-[#333333]">
          {tasks?.length}
        </span>
      </p>
      <p className="flex justify-center items-center gap-x-2 font-bold text-sm text-[#8284FA]">
        Completed
        <span className="py-0.5 px-2 rounded-full font-bold text-xs text-[#D9D9D9] bg-[#333333]">
          {tasks?.filter((task) => task.done == true).length}
        </span>
      </p>
    </div>
  );
}
