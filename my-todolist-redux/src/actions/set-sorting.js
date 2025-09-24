const setSorting = (value) => {
    return (dispatch) => {
      dispatch({ type: "SET_SORTING", payload: value });
    };
  };
  
  export default setSorting;
  