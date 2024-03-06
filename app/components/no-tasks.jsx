import Image from "next/image";

export default function NoTasks() {
  return (
    <div className="flex flex-col justify-center items-center p-16 rounded-sm border-t border-[#333]">
      <Image
        src="/clipboard.png"
        alt="Clipboard"
        width={56}
        height={56}
        className="mb-4"
      />
      <p className="font-bold text-center text-[#808080]">
        You don't have tasks registered yet
        <span className="block font-normal">
          Create tasks and organize your to-do items
        </span>
      </p>
    </div>
  );
}
