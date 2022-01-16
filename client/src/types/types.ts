export type RegisterFields = {
  username: String;
  email: String;
  password: String;
  retryPassword: String;
  firstName: String;
  lastName: String;
};

export type AddProjectType = {
  id?: String,
  project_name: String;
  color: String;
}

export type ProjectStoreTypes = {
  loading: Boolean,
  favorites : AddProjectType[],
  allProjects: AddProjectType[],
}

export type LoginFieldsType = {
  usernameOrEmail: String;
  password: String;
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
  errors: object;
};
