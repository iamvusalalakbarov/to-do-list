import Button from "./button";
import Image from "next/image";

export default function CreateButton() {
  return (
    <Button type="submit" text="create" textClassName={"text-sm"}>
      <Image src={"./plus-icon.svg"} alt="Plus Icon" width={16} height={16} />
    </Button>
  );
}
