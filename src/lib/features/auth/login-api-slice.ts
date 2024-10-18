import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginBody } from './type';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://smh1381.bsite.net/api/User/Accounts',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginBody>({
      query: (body) => ({
        url: 'Login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
export default loginApi;
