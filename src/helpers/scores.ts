import { UserType, ScoreType } from '@/types';

export const getBestScoresByUser = (users: UserType[], scores: ScoreType[]) => {
  const bestScoresMap: Record<number, number> = scores.reduce((acc: Record<number, number>, { userId, score }) => {
    acc[userId] = Math.max(acc[userId] || 0, score);
    return acc;
  }, {});
  
  return users
    .map(({ _id, name }) => ({
      id: Math.floor(Math.random() * 1000000),
      name,
      userId: _id,
      score: bestScoresMap[_id] || 0,
    }))
    .sort((a, b) => b.score - a.score);
};

export const getScoresByUser = (id: number, scores: ScoreType[]): ScoreType[] => {
  return scores
    .filter(({ userId }) => userId === id)
    .sort((a, b) => b.score - a.score);
};
