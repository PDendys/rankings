import React, { useMemo } from 'react';
import { getBestScoresByUser } from '@/helpers';
import useAppDataProvider from '@/hooks/use-app-data-provider';
import BestScoresTable from '@/components/best-scores-table';

const BestScoresTableContainer = () => {
  const { users, scores } = useAppDataProvider();
  const rankingData = useMemo(() => getBestScoresByUser(users, scores), [users, scores]);
  
  return (
    <BestScoresTable data={rankingData} />
  )
}

export default BestScoresTableContainer;
