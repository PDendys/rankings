import { getBestScoresByUser, getScoresByUser } from './scores';
import { UserType, ScoreType } from '../types';

describe('scores helpers', () => {
  const users: UserType[] = [
    { _id: 1, name: 'John' },
    { _id: 2, name: 'Doe' },
  ];
  
  const scores: ScoreType[] = [
    { userId: 1, score: 10 },
    { userId: 1, score: 20 },
    { userId: 2, score: 30 },
    { userId: 2, score: 25 },
  ];
  
  test('getBestScoresByUser', () => {
    const result = getBestScoresByUser(users, scores);
    expect(result.length).toBe(2);
    expect(result[0].score).toBe(30); // First should be the highest score
  });
  
  test('getScoresByUser', () => {
    const result = getScoresByUser(1, scores);
    expect(result.length).toBe(2); // Two score entries for user 1
    expect(result[0].score).toBe(20); // First should be the highest score
    expect(result[1].score).toBe(10); // Second should be the lower score
    expect(getScoresByUser(3, scores).length).toBe(0); // No score entries for user 3
  });
});