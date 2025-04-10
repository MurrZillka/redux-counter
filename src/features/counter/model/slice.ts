import { createSlice, PayloadAction } from '@reduxjs/toolkit'; // 1. Фикс импорта

// Типизация состояния
interface CounterState {
    value: number;
    isLoading?: boolean; // Опциональное поле
}

// Начальное состояние
const initialState: CounterState = {
    value: 0,
};

// Создание слайса
const counterSlice = createSlice({ // 2. Убрали any
    name: 'counter',
    initialState,
    reducers: {
        // Корректные редьюсеры
        increment: (state) => { // 3. Фикс аннотаций
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state, action: PayloadAction<number | undefined>) => {
            state.value = action.payload ?? 100;
        }
    },
});

// Экспорт
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;