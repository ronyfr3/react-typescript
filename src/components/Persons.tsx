type PersonsProps = {
  persons: {
    first: string;
    last: string;
  }[];
};

const Persons = (props: PersonsProps) => {
  return (
    <div>
      {props.persons.map((person) => (
        <p>
          {person.first} : {person.last}
        </p>
      ))}
    </div>
  );
};

export default Persons;
