import { useContext } from "react";
import { AppContext } from "../../context";
import { addTodoInTodos } from "../../utils";

export const useTodoAdd = () => {
  const { todos, setTodos } = useContext(AppContext);

  const onTodoAdd = () => {
    setTodos(addTodoInTodos(todos));
  };
  return { onTodoAdd };
};

