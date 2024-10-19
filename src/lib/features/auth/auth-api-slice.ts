import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginBody, ResLoginData, ResponseData } from './type';
import { setCookie } from 'cookies-next';
import { setCookieOnlogin } from './auth-slice';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://smh1381.bsite.net/api/User/Accounts',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<ResponseData<ResLoginData>, LoginBody>({
      query: (body) => ({
        url: 'Login',
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
            })
          );
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
export default loginApi;
