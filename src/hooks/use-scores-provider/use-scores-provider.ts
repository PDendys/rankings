import { useContext } from 'react';
import { ScoresContext } from '@/providers/scores-provider';

const useScoresProvider = () => {
  const scoresProvider = useContext(ScoresContext);
  
  if (!scoresProvider) {
    throw new Error("useScoresProvider must be used within a RankingProvider");
  }
  
  return scoresProvider;
}

export default useScoresProvider;
