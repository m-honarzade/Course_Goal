type InputPorps = {
  id: string;
  label: string;
  inputRef: HTMLInputElement;
};
const Input = ({ id, label, inputRef }: InputPorps) => {
  return (
    <div className="flex flex-col items-start w-full mb-4 ">
      <label
        htmlFor={id}
        className="text-[#dfd9be] uppercase text-[12px] font-bold tracking-wide"
      >
        {label}
      </label>
      <input
        ref={inputRef}
        type="text"
        id={id}
        className="bg-[#b4b6c4] rounded-sm p-1 w-full tracking-wide focus:border border-blue-950"
      />
    </div>
  );
};

export default Input;
