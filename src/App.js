import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const data = [
  { id: "1", chore: "Wash dishes" },
  { id: "2", chore: "Vacuum stairs" },
];

export const App = () => {
  const [chores, setChores] = useState(data);
  const [todo, setTodo] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setChores([...chores, { id: uuid(), chore: todo }]);
    setTodo("");
  };
  const onDeleteHandler = (id) => {
    const newData = chores.filter((todo) => todo.id !== id);
    setChores(newData);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <h1>Chores List</h1>
        <div>
          <input
            type="text"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
          <button>Submit</button>
        </div>
      </form>
      <ul>
        {chores.map((todo) => {
          return (
            <li key={todo.id} onClick={() => onDeleteHandler(todo.id)}>
              {todo.chore}
            </li>
          );
        })}
      </ul>
    </>
  );
};
