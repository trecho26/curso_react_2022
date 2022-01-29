import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const users = [1, 2, 3, 4, 5];
  let nombre = "Hector";

  return (
    <>
      <h1>Hola {nombre}</h1>
      {users.map((user) => (
        <Card key={user} usuario={user} usuario2={user * 2} />
      ))}
    </>
  );
};

export default App;
