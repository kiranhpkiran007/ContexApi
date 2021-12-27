import React from "react";
import { MyContext } from "../ContexApi/Contex";
// consume data from provider
const Btm = () => {
  return (
    <div>
      <h1>using consumer</h1>
      <MyContext.Consumer>
        {value => (
          <>
            <h1>{value.emp_name}</h1>
            <p>{value.emp_company}</p>
          </>
        )}
      </MyContext.Consumer>
    </div>
  );
};

export default Btm;
