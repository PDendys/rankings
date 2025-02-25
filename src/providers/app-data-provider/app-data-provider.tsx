import { useMemo, createContext, PropsWithChildren } from 'react';
import type { ScoreType, UserType } from '@/types';
import type { AddScoreFormValuesType } from '@/components/add-score-form';
import type { ExcelRowType } from '@/components/excel-dropzone';
import useDataManage from '@/hooks/use-data-manage';

export type AppDataContextType = {
  users: UserType[];
  scores: ScoreType[];
  addScore: (score: AddScoreFormValuesType) => void;
  addMultipleScores: (scores: ExcelRowType[]) => void;
};

type AppDataProviderProps = PropsWithChildren<{
  initialUsers: UserType[];
  initialScores: ScoreType[];
}>;

export const AppDataContext = createContext<AppDataContextType | null>(null);

export const AppDataProvider = ({ children, initialUsers, initialScores }: AppDataProviderProps) => {
  const { scores, users, addScore, addMultipleScores } = useDataManage(initialUsers, initialScores);
  
  const contextValue = useMemo(() => ({
    users,
    scores,
    addScore,
    addMultipleScores
  }), [users, scores]);
  
  return (
    <AppDataContext.Provider value={contextValue}>{children}</AppDataContext.Provider>
  );
};
