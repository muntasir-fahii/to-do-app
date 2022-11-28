import TaskItem from "./TaskItem";
const TaskList = () => {
  return (
    <div className="flex flex-col gap-3 bg-gray-900 container mx-auto p-10">
      <TaskItem />
      <TaskItem />
    </div>
  );
};

export default TaskList;
