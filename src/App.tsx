import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "../public/goals.jpg";
import Body from "./components/Body";
import { useState } from "react";
import CourseGoalsList from "./components/CourseGoalsList";
import Form from "./components/Form";

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const addButtonHandler = (title: string, summary: string) => {
    setGoals((prevGoals) => {
      const newGoal = {
        id: Math.random(),
        title: title,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  };
  const deleteButtonHandler = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <Body>
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        your course goals
      </Header>
      {/* <AddButton onAddButton={addButtonHandler}>Add goal</AddButton> */}
      <Form onAddButton={addButtonHandler} />

      <CourseGoalsList goals={goals} onDeleteButton={deleteButtonHandler} />
    </Body>
  );
}

export default App;
