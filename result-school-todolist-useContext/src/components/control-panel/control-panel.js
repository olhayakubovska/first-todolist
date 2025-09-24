import { Button } from "../button/button";
import { Search, Sorting } from "./components";
import styles from "./control-panel.module.css";
import { useTodoAdd } from "../function";

export const ControlPanel = () => {
  const { onTodoAdd } = useTodoAdd();

  return (
    <div className={styles.controlPanel}>
      <Search />
      <Sorting />
      <Button onClick={onTodoAdd}>✚</Button>
    </div>
  );
};
