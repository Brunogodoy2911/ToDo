import "./App.css";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "./assets/icons/Spinner.svg?react";
import XIcon from "./assets/icons/X-Regular.svg?react";
import Icon from "./components/Icon";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base" />
        <Icon svg={CheckIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={SpinnerIcon} animate />
        <Icon svg={XIcon} />
      </div>
    </div>
  );
}
