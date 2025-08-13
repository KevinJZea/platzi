import { useState } from 'react';

function useLoading(initialLoading = false) {
  const [isLoading, setIsLoading] = useState(initialLoading);

  return { isLoading, setIsLoading };
}

const UserComponent = ({ name }: { name: string }) => {
  const { isLoading, setIsLoading } = useLoading(false);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={() => setIsLoading(true)}>Simulate Loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name="Kevs" />;
};
