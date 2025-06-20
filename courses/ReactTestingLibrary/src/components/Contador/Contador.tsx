import { useState } from 'react';

export const Contador = () => {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => setContador((prev) => prev + 1);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
};
