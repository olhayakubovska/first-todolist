import { useContext } from "react";
import { AppContext } from "../../context";
import { ControlPanel } from "../control-panel/control-panel";
import { Todo } from "../todo/todo";
import {
  useToDoEdit,
  useTodoCompletedChange,
  useTodoRemove,
  useTodoSave,
  useTodoTitleChange,
} from "../function";

const MainPage = () => {
  const { todos } = useContext(AppContext);
  const { onTodoSave } = useTodoSave();
  const { onTodoRemove } = useTodoRemove();
  const { onTodoEdit } = useToDoEdit();
  const { onTodoTitleChange } = useTodoTitleChange();
  const { onTodoCompletedChange } = useTodoCompletedChange();

  return (
    <div>
      <ControlPanel />
      <div>
        {todos.map(({ id, title, completed, isEditing = false }) => (
          <Todo
            key={id}
            id={id}
            title={title}
            completed={completed}
            isEditing={isEditing}
            onEdit={() => onTodoEdit(id)}
            onTitleChange={(newTitle) => onTodoTitleChange(id, newTitle)}
            onCompletedChange={(newCompleted) =>
              onTodoCompletedChange(id, newCompleted)
            }
            onSave={() => onTodoSave(id)}
            onRemove={() => onTodoRemove(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
