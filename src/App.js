import {useReducer} from "react";

import './App.css';
import {CounterOne, CounterThree, CounterTwo} from "./components/Counters";
import State from "./components/State/State";

const reducer = (state, dispatch) => {
    switch (dispatch.type) {
        case 'inc':
            return {...state, counter: state.counter + 1};
        case 'dec':
            return {...state, counter: state.counter - 1};
        case 'reset':
            return {...state, counter: dispatch.payload};
        default:
            return {...state}
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    return (
        <div className="App">
            <State state={state}/>
            <div className={'counters'}>
                <CounterOne dispatch={dispatch}/>
                <CounterTwo dispatch={dispatch}/>
                <CounterThree dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default App;
