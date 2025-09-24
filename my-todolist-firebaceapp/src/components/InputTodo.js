/*Метод val() используется для извлечения данных из снимка (snapshot)
 в базе данных Firebase. Когда вы вызываете snapshot.val(), он возвращает
  данные из снимка в виде JavaScript объекта.

В вашем случае, когда вы используете onValue для прослушивания изменений в базе данных,
 snapshot представляет собой снимок данных в определенном узле вашей базы данных.
  Вызов snapshot.val() возвращает данные из этого узла в формате объекта JavaScript.*/

import React, { useState, useEffect } from "react";
import styles from "../App.module.css";
import TaskTodo from "./TaskTodo";

import { ref, onValue, push, set } from "firebase/database";
import { db } from "../firebase";

const InputTodo = () => {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const taskDbRef = ref(db, "tasks");
    return onValue(taskDbRef, (snapshot) => {
      const loadedProducts = snapshot.val();
      const loadedTasks = loadedProducts
        ? Object.entries(loadedProducts).map(([key, value]) => ({
            id: key,
            text: value.text,
          }))
        : [];

      setTask(loadedTasks);
    });
  }, []);

  const addTask = () => {
    const taskDbRef = ref(db, "tasks");
    const newTasks = push(taskDbRef, "tasks");
    set(newTasks, { text: value });

    /* const newTasks = [...task, { id: Math.random(), text: value }];
    setTask(newTasks);*/
    setValue("");
  };

  const filter = () => {
    const filteredTodo = task.filter((task) =>
      task.text.toLowerCase().includes(search.toLowerCase())
    );
    setTask(filteredTodo);
  };

  const sort = () => {
    const sortedTask = [...task].sort((a, b) => a.text.localeCompare(b.text));
    setTask(sortedTask);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <header className={styles.title}>To-Do List</header>

      {/* Поиск */}
      <div className={styles.task2}>
        <input
          className={styles.inputTodoSearch}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск задачи..."
        />
        <button onClick={filter} className={styles.button}>
          Поиск
        </button>
      </div>

      <form onSubmit={onSubmit} className={styles.task2}>
        <input
          className={styles.inputTodo}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          placeholder="Новая задача..."
        />
        <button onClick={addTask} className={styles.button}>
          Добавить
        </button>
      </form>

      <button onClick={sort} className={styles.button}>
        Сортировать
      </button>
    </div>
  );
};

export default InputTodo;
