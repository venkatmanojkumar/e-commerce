export interface User {
  username: string;
  password: string;
  role: 'admin' | 'user';
}

export interface Admin {
  username: string;
  password: string;
  role: 'admin' | 'user';
}
