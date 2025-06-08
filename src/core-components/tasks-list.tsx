import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import { TaskItem } from "./task-item";
import useTask from "../hooks/use-taks";
import useTasks from "../hooks/use-tasks";

export default function TasksList() {
  const { tasks } = useTask();
  const { prepareTask } = useTasks();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button icon={PlusIcon} className="w-full" onClick={handleNewTask}>
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
