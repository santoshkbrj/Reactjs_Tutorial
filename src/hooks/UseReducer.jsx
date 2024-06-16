import React from 'react';
import { useReducer } from 'react';

function UseReducer() {

    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase': {
                return { count: state.count + 1 }
            }
            case 'decrease': {
                return { count: state.count - 1 }
            }
            default: {
                return state
            }
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <button onClick={() => dispatch({ type: 'increase' })}>+</button>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'decrease' })}>-</button>
        </div>
    )
}

export default UseReducer