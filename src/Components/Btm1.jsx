import React, { Component } from "react";
import { MyContext } from "./../ContexApi/Contex";

class Btm1 extends Component {
    render() {
        let { emp_name, emp_company } = this.context;
        return (
            <div>
                <h1>using contextType</h1>
            <h1>{emp_name}</h1>
            <p>{emp_company}</p>
          </div>
        );
  }
}

export default Btm1;
Btm1.contextType = MyContext;
