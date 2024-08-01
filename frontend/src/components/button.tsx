interface ButtonProps {
  icon?: any;
  label: string;
  extrastyle?: string;
}
const Button = ({ icon, label, extrastyle }: ButtonProps) => {
  return (
    <button
      className={`${extrastyle} flex gap-1 justify-center text-[#008282] font-medium transition-all duration-300 hover:bg-gray-100 w-fit`}
    >
      <span>{label}</span>
      {icon && <span className="mt-[4px]">{icon}</span>}
    </button>
  );
};
export default Button;
