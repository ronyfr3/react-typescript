import Child from "./components/Child";
import Header from "./components/Header";
import Money from "./components/Money";
import Parent from "./components/Parent";
import Persons from "./components/Persons";
import Status from "./components/Status";

const App = () => {
  const data = {
    occupation: "developer",
    home: "dhaka",
  };
  const persons = [
    {
      first: "abdur",
      last: "rakib",
    },
    {
      first: "karim",
      last: "benzima",
    },
    {
      first: "ritz",
      last: "pawel",
    },
  ];
  const money = [10, 20, 30, 40];
  return (
    <div>
      <Header data={data} isLogged={true} age={20} name="arron" />
      <Persons persons={persons} />
      <Money money={money} />
      <Status status="ok" />
      <Parent>
        <Child>hello sir</Child>
      </Parent>
    </div>
  );
};

export default App;
