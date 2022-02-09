type StatusProps = {
  status: "loading" | "ok" | "failed";
};
const Status = ({ status }: StatusProps) => {
  return <div>{status}</div>;
};

export default Status;
