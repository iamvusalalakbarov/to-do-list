"use client";

import clsx from "clsx";
import DeleteButton from "./delete-button";
import { updateTask, removeTask } from "../lib/actions";
import { useTransition } from "react";

export default function ServerTask({ task }) {
  const { content, done } = task;
  const [isPending, startTransition] = useTransition();

  return (
    <li
      onClick={() => startTransition(() => updateTask(task))}
      className="flex justify-between gap-x-3 p-4 rounded-lg border border-[#333] bg-[#262626] cursor-pointer"
    >
      <label className="flex justify-center items-center w-6 h-6 cursor-pointer">
        <input
          type="checkbox"
          className={clsx(
            "appearance-none w-4 h-4 rounded-full cursor-pointer transition",
            {
              "border border-[#4EA8DE] hover:border-[#1E6F9F] hover:bg-[#1E6F9F]/20":
                done == false,
              "bg-[#5E60CE] bg-[url('/check-icon.svg')] bg-no-repeat bg-center hover:bg-[#8284FA]":
                done == true,
            }
          )}
        />
      </label>
      <p
        className={clsx("flex-1 text-sm", {
          "text-[#f2f2f2]": done == false,
          "text-[#808080] line-through": done == true,
        })}
      >
        {content}
      </p>
      <DeleteButton onDelete={() => startTransition(() => removeTask(task))} />
    </li>
  );
}
