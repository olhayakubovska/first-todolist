import { useContext } from "react";
import { Button } from "../../../button/button";
import styles from "./sorting.module.css";
import { AppContext } from "../../../../context";

export const Sorting = () => {
  const { isAlphabetSorting, setIsAlphabetSorting } = useContext(AppContext);

  const onChange = ({ target }) => {
    setIsAlphabetSorting(target.checked);
  };

  return (
    <Button>
      <input
        className={styles.checkbox}
        id="sorting-button"
        type="checkbox"
        checked={isAlphabetSorting}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor="sorting-button">
        A&darr;
      </label>
    </Button>
  );
};
