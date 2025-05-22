import { UseFormRegister } from "react-hook-form";
import { Inputs } from "@/interfaces/inputs";

interface Props {
  name: "email" | "name" | "message";
  label: string;
  register: UseFormRegister<Inputs>;
  error?: { type: string };
  validation?: object;
  type?: "input" | "textarea";
  disabled?: boolean;
}

const CustomFormItem = ({
  name,
  label,
  register,
  error,
  type = "input",
  validation,
  disabled,
}: Props) => {
  const Component = type === "input" ? "input" : "textarea";
  const isError = !!error;
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className={`block mb-2 text-sm text-black font-bold ${
          isError ? "text-red-500" : ""
        }`}
      >
        {label}
      </label>
      <Component
        rows={4}
        className={getInputClass(isError)}
        disabled={disabled}
        {...register(name, { ...validation })}
      />
      {isError && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
          {error.type === "required"
            ? "Campo Obligatorio *"
            : "Email Invalido *"}
        </p>
      )}
    </div>
  );
};

export default CustomFormItem;

const getInputClass = (error) =>
  `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${
    error ? "border-red-500 outline-red-500" : ""
  }`;
