import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import UserScoresTable from '@/components/user-scores-table';
import useAppDataProvider from '@/hooks/use-app-data-provider';
import { getScoresByUser } from '@/helpers';

const UserScoresTableContainer = () => {
  const { id: userId } = useParams();
  const { scores } = useAppDataProvider();
  const scoresByUser = useMemo(() => getScoresByUser(Number(userId), scores), [userId, scores]);
  
  return (
    <UserScoresTable data={scoresByUser} />
  )
};

export default UserScoresTableContainer;
