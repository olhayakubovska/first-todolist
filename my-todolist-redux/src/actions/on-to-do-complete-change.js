import { updateTodo } from "../api";

const onToDoSaveCheckedAction = ( newTodoData) => {
  return (dispatch) => {
    updateTodo(newTodoData).then((data) => {
      dispatch({
        type: "CHANGE_COMPLETED",
        payload: data,
      });
    });
  };
};

export default onToDoSaveCheckedAction;
