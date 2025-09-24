import { readTodos } from "../api";

const fetchTodosAction = (searchPhrase = "", isAlphabetSorting = false) => {
  return (dispatch) => {
    readTodos(searchPhrase, isAlphabetSorting).then((data) => {
      dispatch({
        type: "SET_TODOS",
        payload: data,
      });
    });
  };
};

export default fetchTodosAction;
