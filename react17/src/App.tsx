import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

let rerender = 0;

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setFlag(!flag);
  };

  useEffect(() => {
    rerender++;
    console.log(
      "몇 번의 렌더링이 이루어지나요?",
      rerender,
      "counter: ",
      count,
      "flag: ",
      flag
    );
  }, [count, flag]);

  return (
    <section>
      <h1>React 17 + Vite</h1>
      <div>
        <p>Count: {count}</p>
        <p>Flag: {flag.toString()}</p>
      </div>
      <img src={reactLogo} alt="React Logo" width="120" />
      <img src={viteLogo} alt="Vite Logo" width="120" />
      <p>
        <button onClick={handleClick}>count is: {count}</button>
      </p>
    </section>
  );
}

export default App;
