import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, resetCounter, multiplyByTwo } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(resetCounter())}>Reset to default</button>
            <button onClick={() => dispatch(multiplyByTwo())}>Multiply by Two</button>
        </div>
    );
};

export default Counter;