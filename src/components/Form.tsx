import { FormEvent, useRef } from "react";
import Button from "./Button";
import Input from "./Input";

type FormProps = { onAddButton: (title: string, summary: string) => void };

const Form = ({ onAddButton }: FormProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const goal = goalRef.current!.value;
    const summary = summaryRef.current!.value;
    e.currentTarget.reset();
    onAddButton(goal, summary);
  };
  return (
    <form onSubmit={submitHandler} className="w-full mb-4">
      <Input id={"goal"} label={"Your goal"} inputRef={goalRef} />
      <Input id={"summary"} label={"short summary"} inputRef={summaryRef} />

      <Button type={"submit"}>Add Goal</Button>
    </form>
  );
};

export default Form;
