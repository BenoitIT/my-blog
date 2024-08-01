interface InputProps {
  label: string;
  change: (val: any) => void;
  value: string;
  type?: string;
  placeholder: string;
}
const Input = ({ label, change, value, type, placeholder }: InputProps) => {
  return (
    <div className="w-full px-3">
      <label className="block text-gray-800 text-sm font-medium mb-1">
        {label}
      </label>
      <input
        type={type}
        className="py-2 w-full text-gray-800 placeholder:text-sm outline-none border pl-2"
        placeholder={placeholder}
        onChange={(e) => change(e.target.value)}
        value={value}
      />
    </div>
  );
};
export default Input;

export const CustomTextArea = ({
  label,
  change,
  value,
  placeholder,
}: InputProps) => {
  return (
    <div className="w-full px-3">
      <label className="block text-gray-800 text-sm font-medium mb-1">
        {label}
      </label>
      <textarea
        rows={10}
        className="py-2 w-full text-gray-800 placeholder:text-sm outline-none border pl-2"
        placeholder={placeholder}
        onChange={(e) => change(e.target.value)}
        value={value}
      />
    </div>
  );
};
