import { useState } from "react";

const useContador = (initialValues) => {
  const [counter, setCounter] = useState(initialValues);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const increment2 = () => {
    setCounter(counter * 2);
  };

  const reset = () => {
    setCounter(0);
  };

  return { counter, increment, decrement, increment2, reset };
};

export default useContador;
