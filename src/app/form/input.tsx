import { Inputs } from "@/interfaces/inputs";
import { UseFormRegister } from "react-hook-form";

interface Props {
  name: "email" | "name" | "message";
  label: string;
  register: UseFormRegister<Inputs>;
  error?: boolean;
  validation?: object;
}

const CustomInput = ({ name, label, register,error, validation }: Props) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm  text-black font-bold"
      >
        {label}
      </label>
      <input
        className={getInputClass(error)}
        {...register(name, { ...validation })}
      />
    </div>
  );
};

export default CustomInput;

const getInputClass = (error) => `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${error ? "border-red-500 outline-red-500" : ""}`
