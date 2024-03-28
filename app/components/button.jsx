export default function Button({ type = "", text, children, className, textClassName }) {
  return (
    <button
      type={type}
      className={`flex justify-center items-center gap-x-2 p-4 rounded-lg border border-transparent bg-[#1E6F9F] hover:bg-[#4EA8DE] transition ${className}`}
    >
      <span className={`font-bold text-[#f2f2f2] capitalize ${textClassName}`}>
        {text}
      </span>
      {children}
    </button>
  );
}
