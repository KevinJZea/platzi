interface TabProps extends React.PropsWithChildren {
  label: string;
}

const Tab: React.FC<TabProps> = ({ children, label }) => {
  return (
    <>
      <em>{label}</em>
      <span>{children}</span>
    </>
  );
};

export default Tab;
