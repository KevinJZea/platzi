import React, { useCallback, useState } from 'react';

interface Props {
  message: string;
}
export default function App({ message }: Props) {
  const [count, setCount] = useState(1);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <h1>{message}</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
}
