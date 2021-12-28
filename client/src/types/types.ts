export type RegisterFields = {
  username: String;
  email: String;
  password: String;
  retryPassword: String;
  firstName: String;
  lastName: String;
};

export type userType = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
};
export type authStateType<T> = {
  auth: T;
  user: {} | userType;
  loading: boolean;
};
