

import { updateTodo } from "../api";

const onToDoSaveAction = (id, title) => {
  return (dispatch) => {
    const updatedTodo = { id, title };
    updateTodo(updatedTodo).then((data) => {
      dispatch({
        type: "SAVE_TODO",
        payload: data,
      });
    });
  };
};

export default onToDoSaveAction;
