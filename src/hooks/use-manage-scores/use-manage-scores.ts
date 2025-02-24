import { useState } from 'react';
import { ScoreType, UserType } from '@/types';
import type { AddScoreFormValuesType } from '@/components/add-score-form';
import type { ExcelRowType } from '@/components/excel-dropzone';
import { getNextAvailableUserId, getUserByName } from '@/helpers';
import { createNewUser, createNewScore } from './utils';

type useManageScoresReturnType = {
  users: UserType[];
  scores: ScoreType[];
  addScore: (values: AddScoreFormValuesType) => void;
  addMultipleScores: (values: ExcelRowType[]) => void;
};

const useManageScores = (
  initialUsers: UserType[],
  initialScores: ScoreType[]
): useManageScoresReturnType => {
  const [users, setUsers] = useState<UserType[]>(initialUsers);
  const [scores, setScores] = useState<ScoreType[]>(initialScores);
  
  const addScore = (values: AddScoreFormValuesType): void => {
    const user = getUserByName(values.name, users);
    const userExist = !!user;
    const userId = user?._id ?? getNextAvailableUserId(users);
    
    if (!userExist) {
      const newUser = createNewUser(values.name, userId);
      setUsers(prev => [...prev, newUser]);
    }
    
    const newScore = createNewScore(userId, values.score);
    setScores(prev => [...prev, newScore]);
  };
  
  // IDEA: Move this logic to Web Worker if needed to process a more data
  const addMultipleScores = (values: ExcelRowType[]) => {
    const uniqueNames = [...new Set(values.map(({ name }) => name))];
    let nextUserId = getNextAvailableUserId(users);
    
    const newUsers = uniqueNames.reduce((acc: UserType[], name) => {
      const user = getUserByName(name, users);
      if (!user) {
        const newUser = createNewUser(name, nextUserId++);
        acc.push(newUser);
      }
      return acc;
    }, []);
    
    setUsers(prev => [...prev, ...newUsers]);
    
    const usersMap = new Map<string, number>([
      ...users.map(user => [user.name.toLowerCase(), user._id] as [string, number]),
      ...newUsers.map(user => [user.name.toLowerCase(), user._id] as [string, number])
    ]);
    
    const newScores = values.map(({ name, score }) => {
      const userId = usersMap.get(name.toLowerCase())!;
      return createNewScore(userId, score);
    });
    
    setScores(prevState => [...prevState, ...newScores]);
  };
  
  return {
    users, scores, addScore, addMultipleScores
  };
}

export default useManageScores;