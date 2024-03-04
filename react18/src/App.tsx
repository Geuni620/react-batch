import { useState, useRef } from "react";
import { flushSync } from "react-dom";

type Todo = {
  id: number;
  text: string;
};

export default function TodoList() {
  const listRef = useRef<HTMLUListElement>(null);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  // function handleAdd() {
  //   const newTodo = { id: nextId++, text: text };
  //   setText("");
  //   setTodos([...todos, newTodo]);
  //   listRef.current.lastChild.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //   });
  // }

  function handleAdd() {
    const newTodo = { id: nextId++, text: text };
    flushSync(() => {
      setText("");
      setTodos([...todos, newTodo]);
    });
    const lastChild = listRef.current?.lastChild as Element | null;

    if (lastChild) {
      lastChild.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }

  return (
    <>
      <button onClick={handleAdd}>Add</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul ref={listRef}>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

let nextId = 0;
const initialTodos: Todo[] = Array.from({ length: 20 }, () => {
  return { id: nextId++, text: "Todo #" + nextId };
});
