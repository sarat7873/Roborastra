import { useState, useEffect } from "react";

export default function Counter({ start }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
