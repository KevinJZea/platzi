import { useState } from 'react';

export const ControlledInput = () => {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        placeholder="Enter code. i. e. 10OFF"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Code: {value}</p>
    </div>
  );
};
