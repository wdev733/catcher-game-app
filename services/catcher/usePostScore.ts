import { useUserControllerRegisterScoreMutation } from './api';

import type { CreateUserDto } from './api';

const usePostScore = () => {
  const [registerScore, { isLoading, data, error }] = useUserControllerRegisterScoreMutation();

  const postScore = async (dto: CreateUserDto) => {
    return registerScore({
      createUserDto: dto,
    });
  };

  return {
    postScore,
    isLoading,
    data,
    error,
  };
};

export default usePostScore;
