import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginApi from './features/auth/auth-api-slice';
import authSlice from './features/auth/auth-slice';
import userInfo from './features/user-info/user-api-slice';

const rootReducer = combineReducers({
  loginApi: loginApi.reducer,
  auth: authSlice.reducer,
  userInfo: userInfo.reducer,
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loginApi.middleware, userInfo.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
