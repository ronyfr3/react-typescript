type MoneyProps = {
  money: {}[];
};
const Money = (props: MoneyProps) => {
  return (
    <div>
      {props.money.map((x) => (
        <li>{x}</li>
      ))}
    </div>
  );
};

export default Money;
