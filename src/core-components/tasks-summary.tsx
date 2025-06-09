import Badge from "../components/badge";
import Text from "../components/text";
import useTask from "../hooks/use-task";

export default function TasksSummary() {
  const { createdTasksCount, concluededTasksCount } = useTask();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">{createdTasksCount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Concluídas
        </Text>
        <Badge variant="primary">
          {concluededTasksCount} de {createdTasksCount}
        </Badge>
      </div>
    </>
  );
}
