import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import todoReducer from "./reducer/todo-reducer";
import sortAndSearchReducer from "./reducer/sort-and-searc-reducer";
// const reducer = combineReducers({
//   todoState: todoReducer,
//   sortAndSearcState: sortAndSearchReducer,
// });

// const reducer = combineReducers({
//   todoState: todoReducer,
//   sortAndSearchState: sortAndSearchReducer,
// });

// export const store = createStore(reducer, applyMiddleware(thunk));

const rootReducer = combineReducers({
  todoState: todoReducer,
  sortAndSearchState: sortAndSearchReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
