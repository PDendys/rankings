import React from 'react';
import AppLayout from '@/layouts/app-layout';
import { ScoresContextProvider } from '@/providers/scores-provider';
import AppRouter from '@/routing';
import scoresData from '@/data/scores';
import usersData from '@/data/users';

export default function App () {
  return (
    <AppLayout>
      <ScoresContextProvider initialScores={scoresData} initialUsers={usersData}>
        <AppRouter />
      </ScoresContextProvider>
    </AppLayout>
  )
}
