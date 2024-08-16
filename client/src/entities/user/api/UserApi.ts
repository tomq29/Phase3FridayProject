import axiosInstance from '../../../../service/axiosInstance';
import { maxScoreType, userID } from '../types/userTypes';

class UserApi {
  static updateUserScore = async ({
    maxScore,
    userID,
  }: {
    maxScore: maxScoreType;
    userID: userID;
  }) => {
    const { data } = await axiosInstance.put<number>(
      `/score/${userID}`,
      maxScore
    );

    return data;
  };
}

export default UserApi;
