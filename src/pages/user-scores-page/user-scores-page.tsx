import { useParams } from 'react-router-dom';
import PageLayout from '@/layouts/page-layout';
import { Routes } from '@/constants';
import useAppDataProvider from '@/hooks/use-app-data-provider';
import { getUserById } from '@/helpers';
import UserScoresTableContainer from '@/containers/user-scores-table-container';

const UserScoresPage = () => {
  const { id: userId } = useParams();
  const { users } = useAppDataProvider();
  const user = getUserById(Number(userId), users);
  
  const userName = user?.name || 'User';
  
  return (
    <PageLayout title={`${userName}'s stats`} backLink={Routes.RANKING}>
      <UserScoresTableContainer />
    </PageLayout>
  )
}

export default UserScoresPage;
