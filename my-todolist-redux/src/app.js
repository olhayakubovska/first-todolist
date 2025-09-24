import { useEffect, useState } from "react";
import { ControlPanel } from "./components";
import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import fetchTodosAction from "./actions/set-todos";
import onToDoRemove from "./actions/on-todo-remove";
import onTodoAddAction from "./actions/on-add-to-do";
import onToDoSaveAction from "./actions/on-to-do-save";
import setSearchPharseAction from "./actions/set-search-phrase";
import setSorting from "./actions/set-sorting";
import onToDoSaveCheckedAction from "./actions/on-to-do-complete-change";
import isEditingAction from "./actions/is-editing";

export const App = () => {
  const todos = useSelector((state) => state.todoState.todos);
  const phrase = useSelector((state) => state.sortAndSearchState.searchPhrase);
  const sorting = useSelector(
    (state) => state.sortAndSearchState.isAlphabetSorting
  );
  const dispatch = useDispatch();
  const [valueTodo, setValueTodo] = useState("");

  useEffect(() => {
    dispatch(fetchTodosAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodosAction(phrase, sorting));
  }, [phrase, sorting, dispatch]);

  const onTodoSave = (id, value) => {
    dispatch(onToDoSaveAction(id, value));
    dispatch(isEditingAction(id, false));
  };

  const onTodoAdd = () => {
    dispatch(onTodoAddAction());
    setValueTodo("");
  };

  const onRemove = (id) => {
    dispatch(onToDoRemove(id));
  };

  const setSearchPhrase = (value) => {
    dispatch(setSearchPharseAction(value));
  };

  const setIsAlphabetSorting = (value) => {
    dispatch(setSorting(value));
  };

  const onTodoCompletedChange = (id, completed) => {
    dispatch(onToDoSaveCheckedAction({ id, completed }));
  };

  const onEditing = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setValueTodo(todo.title);
    dispatch(isEditingAction(id, true));
  };

  return (
    <div className={styles.app}>
      <ControlPanel
        onTodoAdd={onTodoAdd}
        onSearch={setSearchPhrase}
        onSorting={setIsAlphabetSorting}
      />
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.todo}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={todo.completed}
              onChange={({ target }) =>
                onTodoCompletedChange(todo.id, target.checked)
              }
            />
            {todo.isEditing ? (
              <>
                <input
                  value={valueTodo}
                  onChange={({ target }) => setValueTodo(target.value)}
                />
                <button onClick={() => onTodoSave(todo.id, valueTodo)}>
                  ✎
                </button>
              </>
            ) : (
              <div className={styles.title}>
                <div onClick={() => onEditing(todo.id)}>{todo.title}</div>
              </div>
            )}
            <button onClick={() => onRemove(todo.id)}>✖</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
