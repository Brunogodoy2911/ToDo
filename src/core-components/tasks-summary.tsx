import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {
  const { createdTasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary" loading={isLoadingTasks}>
          {createdTasksCount}
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Concluídas
        </Text>
        <Badge variant="primary" loading={isLoadingTasks}>
          {concludedTasksCount} de {createdTasksCount}
        </Badge>
      </div>
    </>
  );
}
