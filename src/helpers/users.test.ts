import { getUserByName, getUserById, getNextAvailableUserId } from './users';
import { UserType } from '../types';

describe('users helpers', () => {
  const users: UserType[] = [
    { _id: 1, name: 'John' },
    { _id: 2, name: 'Doe' },
    { _id: 3, name: 'Smith' },
  ];
  
  test('getUserByName', () => {
    expect(getUserByName('doe', users)).toEqual({ _id: 2, name: 'Doe' });
    expect(getUserByName('unknown', users)).toBeNull();
  });
  
  test('getUserById', () => {
    expect(getUserById(1, users)).toEqual({ _id: 1, name: 'John' });
    expect(getUserById(4, users)).toBeNull();
  });
  
  test('getNextAvailableUserId', () => {
    expect(getNextAvailableUserId(users)).toBe(4);
    expect(getNextAvailableUserId([])).toBe(0);
  });
});