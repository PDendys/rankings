import React, { useMemo } from 'react';
import { getBestScoresByUser } from '@/helpers';
import useScoresProvider from '@/hooks/use-scores-provider';
import BestScoresTable from '@/components/best-scores-table';

const BestScoresTableContainer = () => {
  const { users, scores } = useScoresProvider();
  const rankingData = useMemo(() => getBestScoresByUser(users, scores), [users, scores]);
  
  return (
    <BestScoresTable data={rankingData} />
  )
}

export default BestScoresTableContainer;
