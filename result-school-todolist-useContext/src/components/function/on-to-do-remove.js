import { useContext } from "react";
import { AppContext } from "../../context";
import { deleteTodo } from "../../api";
import { removeTodoInTodos } from "../../utils";

export const useTodoRemove = () => {
  const { todos, setTodos } = useContext(AppContext);

  const onTodoRemove = (id) => {
    deleteTodo(id).then(() => setTodos(removeTodoInTodos(todos, id)));
  };
  return { onTodoRemove };
};

