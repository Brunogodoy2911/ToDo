import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import { TaskItem } from "./task-item";
import useTask from "../hooks/use-task";
import useTasks from "../hooks/use-tasks";
import { TaskState } from "../models/task";

export default function TasksList() {
  const { tasks } = useTask();
  const { prepareTask } = useTasks();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
          disabled={tasks.some((task) => task.state === TaskState.Creating)}
        >
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
