import React from 'react';
import { Flex, Box } from '@northlight/ui';
import BestScoresContainer from '@/containers/best-scores-container';
import ScoreAddContainer from '@/containers/score-add-container';
import ScoreImportContainer from '@/containers/score-import-container';
import PageLayout from '@/layouts/page-layout';

const RankingPage = () => (
  <PageLayout title="Ranking">
    <Flex justifyContent="end" mb={4} gap={3}>
      <ScoreImportContainer />
      <ScoreAddContainer />
    </Flex>
    <Box mb={5}>
      <BestScoresContainer />
    </Box>
  </PageLayout>
);

export default RankingPage;
