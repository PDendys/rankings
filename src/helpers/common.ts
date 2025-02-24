import { RouteKeysType } from '@/types';

export const capitalizeFirstLetter = (text: string): string => {
  if (!text) {
    return text;
  }
  
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const buildUrlWithId = (
  url: RouteKeysType,
  id: number
): string => url.replace(':id', `${id}`);
