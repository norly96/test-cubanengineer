import Image from "next/image";

interface Props {
  handleCancel: (index:number) => void;
  index: number;
}

const TaskActions = ({ handleCancel, index }: Props) => {
  return (
    <div
      key={index}
      className="flex justify-between mx-6 pb-2 mt-4 px-1 shadow-md rounded-sm"
    >
      <div className="flex flex-row gap-1">
        <button className="flex flex-row opacity-60 mr-3 px-3 py-1 bg-gray-200 text-black border-2 rounded-lg">
          <Image src="/maximize-2.svg" width={20} height={20} alt="maximize" />
          <span className="hidden xl:block ml-2 text-sm font-semibold">
            Open
          </span>
        </button>
        <button className="flex flex-row  opacity-60 px-3 py-1 border-gray-500 border-2 rounded-lg">
          {" "}
          <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
          <span className="hidden xl:block ml-2 text-sm font-semibold">
            Today
          </span>
        </button>
        <button className="flex flex-row opacity-60 px-3 py-1 border-gray-500 border-2 rounded-lg">
          {" "}
          <Image src="/unlock.svg" width={20} height={20} alt="unlock" />
          <span className="hidden xl:block ml-2 text-sm font-semibold">
            Public
          </span>
        </button>
        <button className="flex flex-row opacity-60 px-3 py-1 border-gray-500 border-2 rounded-lg">
          {" "}
          <Image src="/loader.svg" width={20} height={20} alt="loader" />
          <span className="hidden xl:block ml-2 text-sm font-semibold">
            Highlight
          </span>
        </button>
        <button className="flex flex-row opacity-60 px-3 py-1 border-gray-500 border-2 rounded-lg">
          {" "}
          <Image src="/disc.svg" width={20} height={20} alt="disc" />
          <span className="hidden xl:block ml-2 text-sm font-semibold">
            Estimation
          </span>
        </button>
        <button className="flex flex-row opacity-60 px-3 py-1 border-gray-500 border-2 rounded-lg">
          {" "}
          <Image src="/delete.svg" width={20} height={20} alt="disc" />
          <span className="hidden xl:block ml-2 text-sm font-semibold">
            Delete
          </span>
        </button>
      </div>
      <div>
        <button
          onClick={() => handleCancel(index)}
          className="mr-1 px-4 py-1 bg-blue-600 rounded-lg"
        >
          <span className="text-sm text-white font-semibold">X</span>
        </button>
      </div>
    </div>
  );
};

export default TaskActions;
