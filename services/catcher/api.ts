import { catcherApi as api } from './';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    userControllerRegisterScore: build.mutation<
      UserControllerRegisterScoreApiResponse,
      UserControllerRegisterScoreApiArg
    >({
      query: (queryArg) => ({ url: '/users/register-score', method: 'POST', body: queryArg.createUserDto }),
    }),
    userControllerFindAll: build.query<UserControllerFindAllApiResponse, UserControllerFindAllApiArg>({
      query: (queryArg) => ({ url: '/users', params: { offset: queryArg.offset, limit: queryArg.limit } }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as catcherApi };
export type UserControllerRegisterScoreApiResponse = /** status 200  */ string;
export type UserControllerRegisterScoreApiArg = {
  createUserDto: CreateUserDto;
};
export type UserControllerFindAllApiResponse = /** status 200  */ GetUserResponseDto[];
export type UserControllerFindAllApiArg = {
  /** The number of rows to skip before beginning to return rows in the response. Use this parameter to paginate large result sets. */
  offset?: number;
  /** The maximum number of rows to return in the response. Defualt is 20 */
  limit?: number;
};
export type BadRequestResponseDto = {
  statusCode: number;
  message: string[];
  error: string;
};
export type CreateUserDto = {
  userName: string;
  score: number;
};
export type GetUserResponseDto = {
  id: string;
  userName: string;
  score: number;
};
export const {
  useUserControllerRegisterScoreMutation,
  useUserControllerFindAllQuery,
  useLazyUserControllerFindAllQuery,
} = injectedRtkApi;
