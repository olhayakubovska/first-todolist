
const initialSatesortAndSearch = {
  searchPhrase: "",
  isAlphabetSorting: false,
};

const sortAndSearchReducer = (state = initialSatesortAndSearch, action) => {
  switch (action.type) {
    case "SET_SEARCH_PHARSE":
      return {
        searchPhrase: action.payload,
      };

    case "SET_SORTING":
      return {
        isAlphabetSorting: action.payload,
      };
    default:
      return state;
  }
};

export default sortAndSearchReducer;
