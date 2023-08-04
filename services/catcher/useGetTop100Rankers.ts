import { useUserControllerFindAllQuery } from 'services/catcher/api';

import type { GetUserResponseDto } from 'services/catcher/api';

export type User = GetUserResponseDto;

/**
 * Service to get all movies
 */
const useGetTop100Rankers = () => {
  const { data, isLoading, error, refetch } = useUserControllerFindAllQuery({
    offset: 0,
    limit: 100,
  });

  const users: User[] = data ?? [];

  return {
    data: users,
    isLoading,
    error,
    refetch,
  };
};

export default useGetTop100Rankers;
