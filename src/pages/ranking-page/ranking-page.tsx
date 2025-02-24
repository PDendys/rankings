import React from 'react';
import { Flex, Box } from '@northlight/ui';
import BestScoresTableContainer from '@/containers/best-scores-table-container';
import AddScoreFormContainer from '@/containers/add-score-form-container';
import ImportScoreContainer from '@/containers/import-score-container';
import PageLayout from '@/layouts/page-layout';

const RankingPage = () => (
  <PageLayout title="Ranking">
    <Flex justifyContent="end" mb={4} gap={3}>
      <ImportScoreContainer />
      <AddScoreFormContainer />
    </Flex>
    <Box mb={5}>
      <BestScoresTableContainer />
    </Box>
  </PageLayout>
);

export default RankingPage;
