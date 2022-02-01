import React, { useState } from "react";
import useContador from "../useContador";

const Contador2 = () => {
  const { counter, increment, decrement, increment2, reset } = useContador(5);
  return (
    <>
      <p>Contador: {counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={increment2}>*2</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Contador2;
