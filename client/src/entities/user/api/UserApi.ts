import axiosInstance from '../../../../service/axiosInstance';
import { maxScoreType, userID } from '../types/userTypes';

class UserApi {
  static updateUserScore = ({
    maxScore,
    userID,
  }: {
    maxScore: maxScoreType;
    userID: userID;
  }) => axiosInstance.put<number>(`/score/${userID}`, maxScore);
}

export default UserApi;
