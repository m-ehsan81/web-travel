import { createApi } from '@reduxjs/toolkit/query/react';

import { ResponseData } from '../auth/type';
import { baseQuery } from '../auth/auth';

export const userInfo = createApi({
  reducerPath: 'userInfo',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    userInfo: builder.query<ResponseData<any>, void>({
      query: () => '/User/User/GetUserDetail',
    }),
    setUserInfo: builder.mutation<ResponseData<any>, any>({
      query: (body) => ({
        url: 'User/User/SetUserInfo',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useUserInfoQuery, useSetUserInfoMutation } = userInfo;
export default userInfo;
