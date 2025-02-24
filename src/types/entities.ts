export type UserType = {
  _id: number;
  name: string;
}

export type ScoreType = {
  userId: number;
  score: number;
};

export type BestScoreItemType = ScoreType & {
  id: number;
  name: string;
}
