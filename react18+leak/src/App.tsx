import { useEffect, useState } from "react";

export const LeakComponents = () => {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    console.log("🍀fetching Start");
    const fetchData = async () => {
      // 데이터 페칭을 2초 지연시킵니다.
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 여기서 지연시킴
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const newData = await response.json();

      // 컴포넌트가 언마운트된 후에 상태 업데이트
      setTodo(newData);
    };
    fetchData();

    // 언마운트 시에는 아무런 정리 작업도 수행하지 않습니다.
  }, []);

  if (todo) {
    return <div>{JSON.stringify(todo, null, 2)}</div>;
  } else {
    return null;
  }
};

export default function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <LeakComponents />}
    </div>
  );
}
