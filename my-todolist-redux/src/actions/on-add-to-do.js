import { v4 as uuidv4 } from "uuid";
import { createTodo } from "../api";

const onTodoAddAction = () => {
  const newTodo = {
    id: uuidv4(),
    title: "new",
    completed: false,
    isEditing: true,
  };

  return (dispatch) => {
    createTodo(newTodo).then((data) => {
      dispatch({
        type: "ADD_TODO",
        payload: data,
      });
    });
  };
};

export default onTodoAddAction;
