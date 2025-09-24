import { useContext } from "react";
import { AppContext } from "../../context";
import { setTodoInTodos } from "../../utils";

export const useTodoTitleChange = () => {
  const { todos, setTodos } = useContext(AppContext);

  const onTodoTitleChange = (id, newTitle) => {
    setTodos(setTodoInTodos(todos, { id, title: newTitle }));
  };

  return { onTodoTitleChange };
};

