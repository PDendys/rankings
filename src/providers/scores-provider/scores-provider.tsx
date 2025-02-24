import { useMemo, createContext, PropsWithChildren } from 'react';
import type { ScoreType, UserType } from '@/types';
import type { AddScoreFormValuesType } from '@/components/add-score-form';
import type { ExcelRowType } from '@/components/excel-dropzone';
import useManageScores from '@/hooks/use-manage-scores';

export type ScoresContextType = {
  users: UserType[];
  scores: ScoreType[];
  addScore: (score: AddScoreFormValuesType) => void;
  addMultipleScores: (scores: ExcelRowType[]) => void;
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
