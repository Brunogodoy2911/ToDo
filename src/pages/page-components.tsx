import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "../assets/icons/Spinner.svg?react";
import XIcon from "../assets/icons/X-Regular.svg?react";
import Text from "../components/text";
import Icon from "../components/icon";
import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import Card from "../components/card";
import Container from "../components/container";
import Skeleton from "../components/skeleton";

export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">
            Olá mundo!
          </Text>
          <Text className="text-green-base">Olá mundo!</Text>
          <Text variant="body-md-bold">Olá mundo!</Text>
          <Text>Levar o dog pra passear</Text>
        </div>
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
          <Button icon={PlusIcon} handling>
            Criando
          </Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
          <ButtonIcon icon={TrashIcon} handling />
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
          <Skeleton className="h-6 w-30" />
          <Skeleton className="h-12 w-20" />
          <Skeleton className="h-8 w-10" />
        </div>
      </div>
    </Container>
  );
}
