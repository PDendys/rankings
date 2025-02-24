import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import UserScoresTable from '@/components/user-scores-table';
import useScoresProvider from '@/hooks/use-scores-provider';
import { getScoresByUser } from '@/helpers';

const UserScoresTableContainer = () => {
  const { id: userId } = useParams();
  const { scores } = useScoresProvider();
  const scoresByUser = useMemo(() => getScoresByUser(Number(userId), scores), [userId, scores]);
  
  return (
    <UserScoresTable data={scoresByUser} />
  )
};

export default UserScoresTableContainer;
