import { PropsWithChildren } from "react";

// interface CourseGoalProps {
//   title: string;
//   description: string;
//   children: ReactNode; muss add import {ReactNode} from 'react'
// }

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: number;
  onDelete: (id: number) => void;
}>;

// const CourseGoal:FC<CourseGoalProps>=({ title, description, children }) another way of defininf function with type
const CourseGoal = ({ title, id, onDelete, children }: CourseGoalProps) => {
  return (
    <li className="mt-2">
      <article className="flex flex-row bg-[#475357] rounded-sm p-2 items-start justify-between ">
        <div className="w-75">
          <h3 className="text-[#b1c1c3] capitalize font-bold text-lg tracking-wide">
            {title}
          </h3>
          <p className="text-[#dfd9be] tracking-wide">{children}</p>
        </div>
        <div className="w-25">
          <button
            onClick={() => onDelete(id)}
            className="cursor-pointer text-[#909a9a] capitalize tracking-wide"
          >
            delete
          </button>
        </div>
      </article>
    </li>
  );
};

export default CourseGoal;
