import { RouteKeysType } from '@/types';

export const buildUrlWithId = (
  url: RouteKeysType,
  id: number
): string => url.replace(':id', `${id}`);
