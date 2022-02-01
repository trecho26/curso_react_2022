import "./App.css";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import Contador2 from "./components/Contador2";
import useContador from "./useContador";

const App = () => {
  const initialValues = [
    { id: 1, nombre: "Hector", edad: 25 },
    { id: 2, nombre: "Jose", edad: 21 },
    { id: 3, nombre: "Emilio", edad: 18 },
  ];
  const [users, setUsers] = useState(initialValues);
  const { counter, increment, decrement, reset, increment2 } = useContador(0);

  const agregarUsers = () => {
    // Consulta a BD
    const response = { id: 4, nombre: "Alejandro", edad: 30 };
    setUsers([response]);
  };

  const handleClick = (nombre) => {
    console.log(nombre);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  // console.log("1");

  // // Componente Listo
  // useEffect(() => {
  //   console.log("Componente Listo");
  //   setUsers([...users, { id: 4, nombre: "Alejandro", edad: 30 }]);
  // }, []);

  // // Componente modificado
  // useEffect(() => {
  //   console.log(users);
  // }, [users]);

  // console.log("2");

  return (
    <>
      {/* <input type="text" name="ciudad" onChange={handleChange} />
      <button
        onClick={() => {
          handleClick("Nombre");
        }}
      >
        Agregar
      </button>
      {users.map((user) => (
        <Card key={user} usuario={user} />
      ))} */}
      <p>Contador: {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={increment2}>*2</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <Contador2 />
    </>
  );
};

export default App;
