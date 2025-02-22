import { configureStore } from '@reduxjs/toolkit';
import { dotaCupApi } from '../api/dotaCupApi';

export const store = configureStore({
    reducer: {
        [dotaCupApi.reducerPath]: dotaCupApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dotaCupApi.middleware),
});

// Экспортируем тип для использования в useSelector и useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;