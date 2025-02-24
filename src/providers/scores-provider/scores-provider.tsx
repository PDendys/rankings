import { useMemo, createContext, PropsWithChildren } from 'react';
import { ScoreType, UserType } from '@/types';
import { AddScoreFormValues } from '@/components/add-score-form';

import useManageScores from '@/hooks/use-manage-scores';

export type ScoresContextType = {
  users: UserType[];
  scores: ScoreType[];
  addScore: (score: AddScoreFormValues) => Promise<ScoreType>;
  addMultipleScores: (scores: { name: string; score: number }[]) => void;
};

type ScoresContextProviderProps = PropsWithChildren<{
  initialUsers: UserType[];
  initialScores: ScoreType[];
}>;

export const ScoresContext = createContext<ScoresContextType | null>(null);

export const ScoresContextProvider = ({ children, initialUsers, initialScores }: ScoresContextProviderProps) => {
  const { scores, users, addScore, addMultipleScores } = useManageScores(initialUsers, initialScores);
  
  const contextValue = useMemo(() => ({
    users,
    scores,
    addScore,
    addMultipleScores
  }), [users, scores]);
  
  return (
    <ScoresContext.Provider value={contextValue}>{children}</ScoresContext.Provider>
  );
};
