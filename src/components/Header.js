import Button from "./Button";

const Header = ({ title, showAdd, onAdd }) => {

  return (
    <header className="header">
      <h1>{ showAdd ? "Add Employee Details":title}</h1>
      <Button text={showAdd? 'Close': 'Add'} color={showAdd ? 'red': 'black'} onClick={onAdd}  />
    </header>
  );
};

export default Header;
