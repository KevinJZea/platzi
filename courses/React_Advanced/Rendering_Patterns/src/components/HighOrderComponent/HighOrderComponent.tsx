function withLoading<T extends object>(Component: React.ComponentType<T>) {
  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props;
    return isLoading ? <p>Loading...</p> : <Component {...(rest as T)} />;
  };
}

type UserComponentProps = {
  name: string;
};
const UserComponent: React.FC<UserComponentProps> = ({ name }) => {
  return <p>Hello, {name}!</p>;
};

const UserWithLoading = withLoading(UserComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading name="Kevs" />
      <UserWithLoading isLoading={false} name="Kevs" />
    </div>
  );
};
