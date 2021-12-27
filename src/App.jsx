import React, { Component } from 'react';
import Btm from './Components/Btm';
import Btm1 from './Components/Btm1';
import Btr from './Components/Btr';
import Counter from './Counter/Counter';

class App extends Component {
    render() {
        return (
            <div>
                {/* <Btm />
                <Btm1 />
                <Btr/> */}
                <Counter/>
            </div>
        );
    }
}

export default App;
