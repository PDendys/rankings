import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from '@/constants';
import RankingPage from '@/pages/ranking-page';
import UserScoresPage from '@/pages/user-scores-page';

const router = createBrowserRouter([
  {
    path: `${Routes.RANKING}`,
    element: <RankingPage />
  },
  {
    path: `/${Routes.USER_SCORES}`,
    element: <UserScoresPage />
  }
]);

const AppRouter = () => <RouterProvider
  router={router}
  fallbackElement={<p>No route found</p>}
/>;

export default AppRouter;
