import { PropsWithChildren } from "react";

type AddButtonProps = PropsWithChildren<{ onAddButton: () => void }>;
const AddButton = ({ onAddButton, children }: AddButtonProps) => {
  return (
    <>
      <button onClick={onAddButton} className="text-white">
        {children}
      </button>
    </>
  );
};

export default AddButton;
