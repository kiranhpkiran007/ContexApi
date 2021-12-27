import React, { useContext } from "react";
import { MyContext } from "../ContexApi/Contex";

const Btr = () => {
  let { emp_name, emp_company } = useContext(MyContext);
  return (
    <div>
      <h1>using useContext</h1>
      <h1>{emp_name}</h1>
      <p>{emp_company}</p>
    </div>
  );
};

export default Btr;
