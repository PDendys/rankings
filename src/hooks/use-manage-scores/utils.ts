import { ScoreType, UserType } from '@/types';

export const createNewUser = (name: string, userId: number): UserType => {
  return { _id: userId, name: name.toLowerCase() };
};

export const createNewScore = (userId: number, score: number): ScoreType => {
  return { userId, score };
};