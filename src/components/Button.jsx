import { Button } from "react-daisyui";

export function Btn({ id, label, className, onClick }) {
  return (
    <Button
      id={id}
      className={`bg-white text-black hover:bg-[#ef4444] rounded-full w-full  ${className}`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
