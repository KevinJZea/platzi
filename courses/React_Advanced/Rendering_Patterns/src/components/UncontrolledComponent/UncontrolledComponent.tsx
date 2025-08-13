import { useRef } from 'react';

export const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    if (!inputRef.current) return;

    alert(`New product in the cart: ${inputRef.current.value}`);
  };

  return (
    <div>
      <input
        placeholder="Product name. i. e. Apple"
        ref={inputRef}
        type="text"
      />
      <button onClick={handleSubmit}>Add to cart</button>
    </div>
  );
};
