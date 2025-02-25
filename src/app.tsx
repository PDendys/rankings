import AppLayout from '@/layouts/app-layout';
import { AppDataProvider } from '@/providers/app-data-provider';
import AppRouter from '@/routing';
import scoresData from '@/data/scores';
import usersData from '@/data/users';

const App = () => (
  <AppLayout>
    <AppDataProvider initialScores={scoresData} initialUsers={usersData}>
      <AppRouter />
    </AppDataProvider>
  </AppLayout>
);

export default App;
