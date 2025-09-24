import { useContext, useRef, useState } from "react";
import { debounce } from "./utils";
import styles from "./search.module.css";
import { AppContext } from "../../../../context";

export const Search = () => {
  const { searchPhrase, setSearchPhrase } = useContext(AppContext);
  const [localSearchPhrase, setLocalSearchPhrase] = useState(searchPhrase);

  const debouncedOnSearch = useRef(debounce(setSearchPhrase, 1500)).current;

  const onChange = ({ target }) => {
    setLocalSearchPhrase(target.value);
    debouncedOnSearch(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSearchPhrase(localSearchPhrase)
  };

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="text"
        value={localSearchPhrase}
        placeholder="Поиск..."
        onChange={onChange}
      />
      <button type="submit">s</button>
    </form>
  );
};
