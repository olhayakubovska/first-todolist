import { useContext } from "react";
import { AppContext } from "../../context";
import { setTodoInTodos } from "../../utils";

export const useToDoEdit = () => {
  const { todos, setTodos } = useContext(AppContext);

  const onTodoEdit = (id) => {
    setTodos(setTodoInTodos(todos, { id, isEditing: true }));
  };

  return { onTodoEdit };
};

