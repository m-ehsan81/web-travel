import { createApi } from '@reduxjs/toolkit/query/react';
import { LoginBody, ResponseData, SignUpBody, SignUpRes } from './type';
import { setCookie } from 'cookies-next';
import { setCookieOnlogin } from './auth-slice';
import { baseQueryWithReauth } from './auth';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<ResponseData<string>, LoginBody>({
      query: (body) => ({
        url: '/User/Accounts/Login',
        method: 'POST',
        body,
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          setCookie('access-token', data.data);
          dispatch(
            setCookieOnlogin({
              accessToken: data.data,
            }),
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    signUp: builder.mutation<SignUpRes, SignUpBody>({
      query: (body) => ({
        url: 'User/Accounts/SignUp',
        method: 'POST',
        body,
      }),
    }),
    emailConfirmation: builder.query<any, { token: string }>({
      query: ({ token }) => `User/Accounts/EmailConfirmation?token=${token}`,
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useEmailConfirmationQuery,
} = loginApi;
export default loginApi;
