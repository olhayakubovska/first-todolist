const setSearchPharseAction = (value) => {
  return (dispatch) => {
    dispatch({ type: "SET_SEARCH_PHARSE", payload: value });
  };
};

export default setSearchPharseAction;
