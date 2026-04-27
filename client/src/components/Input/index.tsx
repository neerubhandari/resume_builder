type InputType = {
  name?: string;
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
};
const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  className,
}: InputType) => {
  return (
    <div>
      <input
        className={`flex-1 mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm ${className}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
