"use client";
import Image from "next/image";
import { useState } from "react";
import TaskList from "@/app/components/TaskList";
import { ITask } from "@/types";
import FormActions from "./FormActions";

const Form = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const showActions = () => {
    setShow(true);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    if (value === "") {
      setShow(false);
    } else {
      const formattedWords = value.split(" ");
      setTasks([...tasks, { words: formattedWords }]);
      setValue("");
    }
  };

  const formatText = (value: string) => {
    const mentionRegex = /@\w+/g;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const hashtagRegex = /#\w+/g;
    const urlRegex = /www\.[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/g;

    const parts = value.split(/(\s+)/);

    return parts.map((part, index) => {
      if (part.match(emailRegex)) {
        return (
          <span key={index} className="text-amber-500">
            {part}
          </span>
        );
      } else if (part.match(hashtagRegex)) {
        return (
          <span key={index} className="text-violet-800">
            {part}
          </span>
        );
      } else if (part.match(urlRegex)) {
        return (
          <span key={index} className="text-blue-600">
            {part}
          </span>
        );
      } else if (part.match(mentionRegex)) {
        return (
          <span key={index} className="text-emerald-600">
            {part}
          </span>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <div>
      <div
        onClick={showActions}
        className="flex flex-row items-center h-10 mx-6 mt-10"
      >
        <Image
          src="/plus-square.svg"
          width={24}
          height={24}
          alt="plus-square"
        />
        <div className="relative flex items-center mx-2 w-full">
          <input
            type="text"
            value={value}
            className="absolute items-center focus:outline-none h-6 w-full"
            onChange={handleChange}
            placeholder="Type to add new task"
          />
          <div className="absolute w-full h-6 pointer-events-none">
            {formatText(value)}
          </div>
        </div>
        <Image
          src="/avatar.png"
          width={24}
          height={24}
          alt="avatar"
          className={`h-6 ${show ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      {show && (
        <FormActions
          value={value}
          setShow={setShow}
          handleSubmit={handleSubmit}
        />
      )}

      <div>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default Form;
