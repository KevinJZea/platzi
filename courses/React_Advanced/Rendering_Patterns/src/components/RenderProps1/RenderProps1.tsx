type ChildComponentProps = {
  render: (name: string) => JSX.Element;
};

export const ChildComponent: React.FC<ChildComponentProps> = ({ render }) => {
  const name = 'kevinjzea';

  return <div>{render(name)}</div>;
};

export const ParentComponent = () => {
  return <ChildComponent render={(name: string) => <p>Hello, {name}!</p>} />;
};
