"use client";
import { TaskListProps } from "@/types"
import link from "../../../public/link.svg"
import mail from "../../../public/mail.svg"
import Image from "next/image"
import { useState } from "react"
import TaskActions from "./TaskActions"

const formatText = (value: string) => {
  const mentionRegex = /@\w+/g;
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  const hashtagRegex = /#\w+/g;
  const urlRegex = /www\.[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/g;

  const parts = value.split(/(\s+)/);

  return parts.map((part, index) => {
    if (part.match(emailRegex)) {
      return (
        <span
          key={index}
          className="flex flex-row cursor-pointer gap-1 px-2 rounded-lg bg-amber-200 text-amber-500"
        >
          <Image src={mail} alt="icon-mail" width={16} height={16} /> {part}
        </span>
      );
    } else if (part.match(hashtagRegex)) {
      return (
        <span
          key={index}
          className="cursor-pointer px-2 rounded-lg bg-violet-200 text-violet-800"
        >
          {part}
        </span>
      );
    } else if (part.match(urlRegex)) {
      return (
        <span
          key={index}
          className="flex flex-row gap-1 px-2 rounded-lg bg-blue-200 text-blue-600"
        >
          <Image src={link} alt="icon-link" width={16} height={16} />
          {part}
        </span>
      );
    } else if (part.match(mentionRegex)) {
      return (
        <span
          key={index}
          className="cursor-pointer px-2 rounded-lg bg-emerald-200 text-emerald-600"
        >
          {part}
        </span>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });
};

const TaskList = ({ tasks }: TaskListProps) => {
  const [selectIndex, setselectIndex] = useState<number | null>(null);

  const handleClick = (index: number) => setselectIndex(index);
  const handleCancel = (index:number) => setselectIndex(null);

  return (
    <div>
      {tasks.map((task, index) => (
        <div>
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="flex flex-row justify-between h-10 mx-6 mt-1 items-center"
          >
            <div className="flex flex-row justify-center">
              <input
                className="flex items-center"
                type="checkbox"
                id={`task-${index}`}
              />
              <label
                htmlFor={`task-${index}`}
                className="flex flex-row gap-2 ml-2 text-lg"
              >
                {formatText(task.words.join(" "))}
              </label>
            </div>
            <Image
              src="/avatar.png"
              width={24}
              height={24}
              alt="avatar"
              className="h-6 justify-end"
            />
          </div>
          {selectIndex === index && (
            <TaskActions handleCancel={handleCancel} index={index} />
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
