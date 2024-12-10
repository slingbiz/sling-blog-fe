export const authRole = {
  admin: ['admin'],
  user: ['user', 'admin'],
};

export const VIEW_TYPE = Object.freeze({LIST: 1, GRID: 2});

export const defaultUser = {
  displayName: 'John Alex',
  email: 'demo@example.com',
  token: 'access-token',
  role: 'user',
  photoURL: 'https://via.placeholder.com/150',
};
export const initialUrl = '/dubai/women/clothes/products'; // this url will open after login
