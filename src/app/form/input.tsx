interface Props {
  name: string;
  label: string;
}

const CustomInput = ({ name, label }: Props) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm  text-black font-bold"
      >
        {label}
      </label>
      <input
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      />
    </div>
  );
};

export default CustomInput;
