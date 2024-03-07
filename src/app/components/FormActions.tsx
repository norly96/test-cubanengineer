import Image from "next/image";
import { SetStateAction } from "react";

interface Props {
  value: string;
  setShow: (value: SetStateAction<boolean>) => void;
  handleSubmit: () => void;
}

const FormActions = ({ value, setShow, handleSubmit }: Props) => {
  return (
    <div className="flex justify-between mx-6 pb-2 mt-4 px-1 shadow-md rounded-sm">
      <div className="flex flex-row gap-1">
        <button
          disabled={value === ""}
          className={`flex flex-row mr-3 px-3 py-1 bg-gray-200 text-black border-2 rounded-lg ${
            value === "" ? "opacity-25" : "opacity-90"
          }`}
        >
          <Image src="/maximize-2.svg" width={20} height={20} alt="maximize" />
          <span className="ml-2 text-sm font-semibold">Open</span>
        </button>
        <button
          disabled={value === ""}
          className={`flex flex-row px-3 py-1 border-gray-500 border-2 rounded-lg ${
            value === "" ? "opacity-20" : "opacity-50"
          }`}
        >
          {" "}
          <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
          <span className="ml-2 text-sm font-semibold">Today</span>
        </button>
        <button
          disabled={value === ""}
          className={`flex flex-row px-3 py-1 border-gray-500 border-2 rounded-lg ${
            value === "" ? "opacity-20" : "opacity-50"
          }`}
        >
          {" "}
          <Image src="/unlock.svg" width={20} height={20} alt="unlock" />
          <span className="ml-2 text-sm font-semibold">Public</span>
        </button>
        <button
          disabled={value === ""}
          className={`flex flex-row px-3 py-1 border-gray-500 border-2 rounded-lg ${
            value === "" ? "opacity-20" : "opacity-50"
          }`}
        >
          {" "}
          <Image src="/loader.svg" width={20} height={20} alt="loader" />
          <span className="ml-2 text-sm font-semibold">Highlight</span>
        </button>
        <button
          disabled={value === ""}
          className={`flex flex-row px-3 py-1 border-gray-500 border-2 rounded-lg ${
            value === "" ? "opacity-20" : "opacity-50"
          }`}
        >
          {" "}
          <Image src="/disc.svg" width={20} height={20} alt="disc" />
          <span className="ml-2 text-sm font-semibold">Estimation</span>
        </button>
      </div>
      <div>
        <button
          onClick={() => setShow(false)}
          className="mr-1 px-4 py-1 bg-gray-200 border-2 rounded-lg"
        >
          <span className="text-sm text-black font-semibold">Cancel</span>
        </button>
        <button
          onClick={handleSubmit}
          className="mr-1 px-4 py-1 bg-blue-600 rounded-lg"
        >
          <span className="text-sm text-white font-semibold">
            {value === "" ? "Ok" : "Add"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FormActions;
