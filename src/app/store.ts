import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/features/counter/model/slice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// Типы для работы с useSelector/useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;