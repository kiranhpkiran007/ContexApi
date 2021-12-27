import React, { useContext } from "react";
import { MyCounter } from "../ContexApi/Counter";

const Counter = () => {
  let { count, Increment, Decrement, Reset } = useContext(MyCounter);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Counter;
