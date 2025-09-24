import { deleteTodo } from "../api";

const onToDoRemove = (id) => {
  return (dispatch) => {
    deleteTodo(id).then(() => {
      dispatch({
        type: "REMOVE_TODO",
        payload: id,
      });
    });
  };
};

export default onToDoRemove;
