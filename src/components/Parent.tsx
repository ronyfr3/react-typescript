type ParentProps = {
  //this is for component type
  children: React.ReactNode;
};
const Parent = (props: ParentProps) => {
  return <div>{props.children}</div>;
};

export default Parent;
