import { configureStore } from '@reduxjs/toolkit';
import { APIService } from '../services';
import guestUserReducer from './slices/guestUserSlice';
import assessmentReducer from './slices/assessmentSlice';

export const store = configureStore({
  reducer: {
    [APIService.reducerPath]: APIService.reducer,
    guestUserData: guestUserReducer,
    assessmentData: assessmentReducer
    
  },
  middleware: (getDefaultMiddleware : any) => getDefaultMiddleware().concat(APIService.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
