export type User = {
  id: number;
  login: string;
  maxScore: number;
};

export type userID = User['id']

export type maxScoreType = User['maxScore']