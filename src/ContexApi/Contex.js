import { createContext } from "react";
export let MyContext = createContext();

// create Provider

let Provider = props => {
    return (
        <MyContext.Provider value={{emp_name : 'shashi',emp_company:'test_yantra'}}>
            {props.children}
        </MyContext.Provider>
    )
}
export default Provider