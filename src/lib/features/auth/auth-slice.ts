import { createSlice } from '@reduxjs/toolkit';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const initialState = {
  token: getCookie('access-token'),
  refreshToken: getCookie('refresh-token'),
  usedToken: getCookie('access-token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCookieOnlogin: (state, action) => {
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    authTokenChange: (state, action) => {
      setCookie('access-token', action.payload.accessToken);
      setCookie('refresh-token', action.payload.refreshToken);
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.usedToken = action.payload.accessToken;
    },
    logoutUser: (state) => {
      deleteCookie('access-token');
      deleteCookie('refresh-token');
      state.token = undefined;
      state.refreshToken = undefined;
      state.usedToken = undefined;
    },
    adjustUsedToken: (state, action) => {
      state.usedToken = action.payload;
    },
  },
});

export const {
  authTokenChange,
  logoutUser,
  adjustUsedToken,
  setCookieOnlogin,
} = authSlice.actions;
export default authSlice;
