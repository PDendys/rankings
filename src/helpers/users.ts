import { UserType } from '@/types';

const findUser = (
  predictor: (user: UserType) => boolean,
  users: UserType[]
): UserType | null => {
  for (const user of users) {
    if(predictor(user)) {
      return user;
    }
  }
  return null;
};

export const getUserByName = (name: string, users: UserType[]): UserType | null => {
  return findUser(user => user.name.toLowerCase() === name.toLowerCase(), users);
};

export const getUserById = (id: number, users: UserType[]): UserType | null => {
  return findUser(user => user._id === id, users);
};

export const getNextAvailableUserId = (users: UserType[]): number => {
  const ids = users.map(({ _id }) => _id);
  
  if (!ids.length) {
    return 0
  }
  
  return (Math.max(...ids) || 0) + 1;
}