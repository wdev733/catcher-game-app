import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { envParams } from 'shared/configs/constants';
import requestTool from 'shared/tools/request';

import type { BaseQueryFn, FetchBaseQueryError, FetchArgs } from '@reduxjs/toolkit/query/react';

const rawBaseQuery = fetchBaseQuery({
  prepareHeaders: async (headers) => {
    headers.set('Authorization', envParams.catcherGameServiceBaseUrl);
    return headers;
  },
});

const dynamicBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const baseUrl = envParams.catcherGameServiceBaseUrl;
  const adjustedArgs = requestTool.buildAdjestedRequestUrl(baseUrl, args);
  return rawBaseQuery(adjustedArgs, api, extraOptions);
};

export const catcherApi = createApi({
  reducerPath: 'catcherApi',
  baseQuery: dynamicBaseQuery,
  endpoints: () => ({}),
});
