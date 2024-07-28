import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;
const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className=" w-full p-2 rounded-sm bg-[#f7e596] text-[#3a4346] text-sm font-extrabold cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
