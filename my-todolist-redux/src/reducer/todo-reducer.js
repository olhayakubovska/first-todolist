const initialStateTodo = {
    todos: [],
  };
  
  const todoReducer = (state = initialStateTodo, action) => {
    switch (action.type) {
      case "SET_TODOS":
        return {
          ...state,
          todos: action.payload,
        };
  
      case "REMOVE_TODO":
        return {
          ...state,
          todos: state.todos.filter((item) => item.id !== action.payload),
        };
  
      case "ADD_TODO":
        return {
          ...state,
          todos: [action.payload, ...state.todos],
        };
  
      case "SAVE_TODO":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, ...action.payload }
              : todo
          ),
        };
  
      case "CHANGE_COMPLETED":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, completed: action.payload.completed }
              : todo
          ),
        };
  
      case "SET_IS_EDITING":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id
              ? { ...todo, isEditing: action.payload.isEditing }
              : todo
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;
  