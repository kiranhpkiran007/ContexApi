import React, { createContext, useState } from "react";

export let MyCounter = createContext(0);

let CounterContext = ({ children }) => {
  let [count, setcount] = useState(0);
  let Increment = () => {
    setcount(prev => prev + 1);
  };
  let Decrement = () => {
    setcount(prev => prev - 1);
  };
  let Reset = () => {
    setcount(0);
  };
  return (
    <MyCounter.Provider value={{ count, Increment, Decrement, Reset }}>
      {children}
    </MyCounter.Provider>
  );
};
export default CounterContext;
