import { buildUrlWithId } from './url';
import { Routes } from '../constants';

describe('url helpers', () => {
  it('should return proper url ', () => {
    const result = buildUrlWithId(Routes.USER_SCORES, 123);
    expect(result).toBe('user/123/scores');
  });
  
  it('should return proper url when no id to be replaced', () => {
    const result = buildUrlWithId(Routes.RANKING, 123);
    expect(result).toBe('/');
  });
});