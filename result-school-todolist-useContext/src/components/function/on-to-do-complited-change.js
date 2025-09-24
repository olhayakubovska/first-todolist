import { useContext } from "react";
import { AppContext } from "../../context";
import { updateTodo } from "../../api";
import { setTodoInTodos } from "../../utils";

export const useTodoCompletedChange = () => {
  const { todos, setTodos } = useContext(AppContext);

  const onTodoCompletedChange = (id, newCompleted) => {
    updateTodo({ id, completed: newCompleted }).then(() => {
      setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
    });
  };

  return { onTodoCompletedChange };
};

