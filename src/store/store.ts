import { configureStore } from '@reduxjs/toolkit';
import { APIService } from '../services';

export const store = configureStore({
  reducer: {
    [APIService.reducerPath]: APIService.reducer
  },
  middleware: (getDefaultMiddleware : any) => getDefaultMiddleware().concat(APIService.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
