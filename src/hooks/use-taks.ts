import useLocalStorage from "use-local-storage";
import { TASKS_KEY, type Task } from "../models/task";

export default function useTask() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concluededTasksCount: tasks.filter((task) => task.concluded).length,
  };
}
