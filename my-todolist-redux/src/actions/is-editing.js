import { updateTodo } from "../api";

const isEditingAction = (id, isEditing) => {
  return (dispatch) => {
    const updatedTodo = { id, isEditing };
    updateTodo(updatedTodo).then((data) => {
      dispatch({
        type: "SET_IS_EDITING",
        payload: { id, isEditing },
      });
    });
  };
};

export default isEditingAction;
