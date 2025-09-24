import { useEffect, useState } from "react";
import { readTodos } from "./api";
import { AppContext } from "./context";
import MainPage from "./components/main-page/main-page";
import styles from "./app.module.css";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [isAlphabetSorting, setIsAlphabetSorting] = useState(false);

  const contextValue = {
    todos,
    setTodos,
    searchPhrase,
    setSearchPhrase,
    isAlphabetSorting,
    setIsAlphabetSorting,
  };

  useEffect(() => {
    readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) => {
      setTodos(loadedTodos);
      console.log("Loaded Todos:", loadedTodos);
    });
  }, [searchPhrase, isAlphabetSorting]);

  return (
    <div className={styles.app}>
      <AppContext.Provider value={contextValue}>
        <MainPage />
      </AppContext.Provider>
    </div>
  );
};
