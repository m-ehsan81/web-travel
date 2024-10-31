import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginApi from './features/auth/auth-api-slice';
import authSlice from './features/auth/auth-slice';

const rootReducer = combineReducers({
  loginApi: loginApi.reducer,
  auth: authSlice.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loginApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
