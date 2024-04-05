import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";
import InfoBox from "./infoBox/InfoBox";
import { ReactNode } from "react";

type CourseGoalListProp = {
  goals: CGoal[];
  onDeleteButton: (id: number) => void;
};

const CourseGoalsList = ({ goals, onDeleteButton }: CourseGoalListProp) => {
  if (goals.length === 0)
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );

  let warningBox: ReactNode;
  if (goals.length >= 3)
    warningBox = (
      <InfoBox mode="warning" severity="low">
        You're collecting a lot of goals. Dont't put too much on your Plate!
      </InfoBox>
    );
  if (goals.length >= 5)
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Dont't put too much on your Plate!
      </InfoBox>
    );

  return (
    <>
      {warningBox}
      <ul
        className={`${
          goals.length === 1 ? "" : "lg:grid grid-cols-2 lg:gap-2"
        }`}
      >
        {goals.map((goal) => (
          <CourseGoal
            title={goal.title}
            key={goal.id}
            id={goal.id}
            onDelete={onDeleteButton}
          >
            {goal.description}
          </CourseGoal>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalsList;
