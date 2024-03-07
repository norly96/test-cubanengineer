"use client";
import Image from "next/image";
import { useState } from "react";

const Form = () => {
  const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const showActions = () => {
    setShow(true);
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const submitEmpty = () => {
    if(value === ""){
      setShow(false)
    }
  }

  const formatText = (value: string) => {
    const mentionRegex = /@\w+/g;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const hashtagRegex = /#\w+/g;
    const urlRegex = /www\.[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/g;
   
    const parts = value.split(/(\s+)/);
   
    return parts.map((part, index) => {
       if (part.match(emailRegex)) {
         return <span key={index} className="text-amber-500">{part}</span>;
       } else if (part.match(hashtagRegex)) {
         return <span key={index} className="text-violet-800">{part}</span>;
       } else if (part.match(urlRegex)) {
         return <span key={index} className="text-blue-600">{part}</span>;
       } 
       else if (part.match(mentionRegex)) {
        return <span key={index} className="text-emerald-600">{part}</span>;
      } 
      else {
         return <span key={index}>{part}</span>;
       }
    });
   };

  return (
    <div>
      <div onClick={showActions} className="flex flex-row items-center h-10 mx-6 mt-10">
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
            className="absolute items-center focus:outline-none h-6 w-full "
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
          className={`h-6 ${ value === '' ? 'opacity-15' : ''}`}
        />
      </div>

      {show && (
        <div className="flex justify-between mx-6 pb-2 mt-4 px-1 shadow-md rounded-sm">
          <div className="flex flex-row gap-1">
            <button disabled={value === ''} className={`flex flex-row mr-3 px-3 py-1 bg-gray-200 text-black border-2 rounded-lg ${value === "" ? 'opacity-25' : 'opacity-90'}`}>
              <Image
                src="/maximize-2.svg"
                width={20}
                height={20}
                alt="maximize"
              />
              <span className="ml-2 text-sm font-semibold">Open</span>
            </button>
            <button disabled={value === ''} className={`flex flex-row px-3 py-1 border-gray-500 border-2 rounded-lg ${value === "" ? 'opacity-20' : 'opacity-50'}`}>
              {" "}
              <Image
                src="/calendar.svg"
                width={20}
                height={20}
                alt="calendar"
              />
              <span className="ml-2 text-sm font-semibold">Today</span>
            </button>
            <button disabled={value === ''} className={`flex flex-row px-3 py-1 border-gray-500 border-2 rounded-lg ${value === "" ? 'opacity-20' : 'opacity-50'}`} >
              {" "}
              <Image
                src="/unlock.svg"
                width={20}
                height={20}
                alt="unlock"
              />
              <span className="ml-2 text-sm font-semibold">Public</span>
            </button>
            <button disabled={value === ''} className={`flex flex-row px-3 py-1 border-gray-500 border-2 rounded-lg ${value === "" ? 'opacity-20' : 'opacity-50'}`}>
              {" "}
              <Image
                src="/loader.svg"
                width={20}
                height={20}
                alt="loader"
              />
              <span className="ml-2 text-sm font-semibold">Highlight</span>
            </button>
            <button disabled={value === ''} className={`flex flex-row px-3 py-1 border-gray-500 border-2 rounded-lg ${value === "" ? 'opacity-20' : 'opacity-50'}`}>
              {" "}
              <Image
                src="/disc.svg"
                width={20}
                height={20}
                alt="disc"
              />
              <span className="ml-2 text-sm font-semibold">Estimation</span>
            </button>
          </div>
          <div>
            <button onClick={() => setShow(false)} className="mr-1 px-4 py-1 bg-gray-200 border-2 rounded-lg">
              <span className="text-sm text-black font-semibold">Cancel</span>
            </button>
            <button onClick={submitEmpty} className="mr-1 px-4 py-1 bg-blue-600 rounded-lg">
              
              <span className="text-sm text-white font-semibold">{value === "" ? "Ok" : "Add"}</span>
            </button>
          </div>
        </div>
      )}

      <div></div>
    </div>
  );
};

export default Form;
