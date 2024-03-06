import Image from "next/image";

export default function TodoLogo({ className }) {
  return (
    <div className={`flex items-center gap-x-3 ${className}`}>
      <Image src="/rocket.png" width={22} height={36} alt="Todo Logo" className="mt-1" />
      <p className="font-black text-[40px]">
        <span className="text-[#4EA8DE]">to</span>
        <span className="text-[#5E60CE]">do</span>
      </p>
    </div>
  );
}
