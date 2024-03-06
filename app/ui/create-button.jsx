import Image from "next/image";

export default function CreateButton() {
  return (
    <button className="flex justify-center items-center gap-x-2 p-4 rounded-lg border border-transparent bg-[#1E6F9F]">
      <span className="text-sm font-bold text-[#f2f2f2]">Create</span>
      <Image src={"./plus-icon.svg"} alt="Plus Icon" width={16} height={16} />
    </button>
  );
}
