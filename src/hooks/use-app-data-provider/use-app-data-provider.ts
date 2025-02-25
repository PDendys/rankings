import { useContext } from 'react';
import { AppDataContext } from '@/providers/app-data-provider';

const useAppDataProvider = () => {
  const appDataProvider = useContext(AppDataContext);
  
  if (!appDataProvider) {
    throw new Error("useAppDataProvider must be used within a RankingProvider");
  }
  
  return appDataProvider;
}

export default useAppDataProvider;
