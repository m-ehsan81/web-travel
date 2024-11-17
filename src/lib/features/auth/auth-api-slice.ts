import { createApi } from '@reduxjs/toolkit/query/react';
import { LoginBody, ResLoginData, ResponseData, SignUpBody } from './type';
import { setCookie } from 'cookies-next';
import { setCookieOnlogin } from './auth-slice';
import { baseQueryWithReauth } from './auth';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<ResponseData<ResLoginData>, LoginBody>({
      query: (body) => ({
        url: '/SSO/Accounts/Login',
        method: 'POST',
        body,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          setCookie('access-token', data.data.token.token);
          setCookie('refresh-token', data.data.token.refreshToken);
          dispatch(
            setCookieOnlogin({
              accessToken: data.data.token.token,
              refreshToken: data.data.token.refreshToken,
            }),
          );
        } catch (error) {
          console.error(error);
        }
      },
    }),
    signUp: builder.mutation<any, SignUpBody>({
      query: (body) => ({
        url: 'User/Accounts/SignUp',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = loginApi;
export default loginApi;
