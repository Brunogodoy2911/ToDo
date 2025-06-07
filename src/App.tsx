import "./App.css";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "./assets/icons/Spinner.svg?react";
import XIcon from "./assets/icons/X-Regular.svg?react";
import Icon from "./components/icon";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";
import Skeleton from "./components/skeleton";

export default function App() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={XIcon} />
        </div>

        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading> 5 </Badge>
        </div>

        <div className="flex gap-2">
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div className="flex gap-1">
          <InputText />
        </div>

        <div className="flex gap-1">
          <InputCheckbox />

          <InputCheckbox loading />
        </div>

        <div className="flex gap-1">
          <Card size="md"> Olá Mundo</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton />
          <Skeleton className="w-96" />
        </div>
      </div>
    </Container>
  );
}
