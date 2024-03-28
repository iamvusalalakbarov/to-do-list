import Image from "next/image";

export default function TodoLogo({ name, className }) {
  const [name1, name2] = name.split(" ");

  return (
    <div className={`flex justify-center items-center gap-x-3 ${className}`}>
      <Image src="/rocket.png" width={22} height={36} alt="Todo Logo" className="" />
      <p className="font-black text-[40px] lowercase">
        <span className="text-[#4EA8DE]">{name1}</span>
        <span className="text-[#5E60CE]">{name2}</span>
      </p>
    </div>
  );
}
