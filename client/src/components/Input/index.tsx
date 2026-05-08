type InputType = {
  name?: string;
  type: string;
  placeholder?: string;
  value?: string | number;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
};

const Input = ({
  name,
  type,
  placeholder,
  value,
  checked,
  onChange,
  className,
  disabled,
}: InputType) => {
  return (
    <div>
      <input
        disabled={disabled}
        className={`flex-1 mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm ${className}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={type !== "checkbox" ? value : undefined}
        checked={type === "checkbox" ? checked : undefined}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
