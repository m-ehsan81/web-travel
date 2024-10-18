import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginApi from './features/auth/auth-api-slice';

const rootReducer = combineReducers({ loginApi: loginApi.reducer });

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
