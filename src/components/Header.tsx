type HeaderProps = {
  data: {
    occupation: string;
    home: string;
  };
  name: string;
  age?: number; //optional props
  isLogged: boolean;
};

const Header = ({ data, name, age = 0, isLogged }: HeaderProps) => {
  return (
    <div>
      {isLogged
        ? `welcome ${name} at age of ${age}, duty:${data.occupation}, home:${data.home}`
        : "welcome guest"}
    </div>
  );
};

export default Header;
