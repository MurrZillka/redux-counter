import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store';
import { increment, decrement, resetCounter, multiplyByTwo } from '@/features/counter/model/slice';

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(resetCounter())}>Reset</button>
            <button onClick={() => dispatch(multiplyByTwo())}>×2</button>
        </div>
    );
};

export default Counter;