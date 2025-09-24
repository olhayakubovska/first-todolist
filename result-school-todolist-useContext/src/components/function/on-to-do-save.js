import { useContext } from "react";
import {
  findTodo,
  setTodoInTodos,
  removeTodoInTodos,
  addTodoInTodos,
} from "../../utils";
import { NEW_TODO_ID } from "../../constants";
import { updateTodo, createTodo } from "../../api";
import { AppContext } from "../../context";

export const useTodoSave = () => {
  const { todos, setTodos } = useContext(AppContext);

  const onTodoSave = (todoId) => {
    const { title, completed } = findTodo(todos, todoId) || {};

    if (todoId === NEW_TODO_ID) {
      createTodo({ title, completed }).then((todo) => {
        let updatedTodos = setTodoInTodos(todos, {
          id: NEW_TODO_ID,
          isEditing: false,
        });
        updatedTodos = removeTodoInTodos(updatedTodos, NEW_TODO_ID);
        updatedTodos = addTodoInTodos(updatedTodos, todo);
        setTodos(updatedTodos);
      });
    } else {
      updateTodo({ id: todoId, title }).then(() => {
        setTodos(setTodoInTodos(todos, { id: todoId, isEditing: false }));
      });
    }
  };

  return { onTodoSave };
};


// const onTodoSave = (todoId) => {
//     const { title, completed } = findTodo(todos, todoId) || {};

//     if (todoId === NEW_TODO_ID) {
//       createTodo({ title, completed }).then((todo) => {
//         let updatedTodos = setTodoInTodos(todos, {
//           id: NEW_TODO_ID,
//           isEditing: false,
//         });
//         updatedTodos = removeTodoInTodos(updatedTodos, NEW_TODO_ID);
//         updatedTodos = addTodoInTodos(updatedTodos, todo);
//         setTodos(updatedTodos);
//       });
//     } else {
//       updateTodo({ id: todoId, title }).then(() => {
//         setTodos(setTodoInTodos(todos, { id: todoId, isEditing: false }));
//       });
//     }
//   };
