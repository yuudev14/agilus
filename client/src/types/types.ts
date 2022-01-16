export type RegisterFields = {
  username: string;
  email: string;
  password: string;
  retryPassword: string;
  firstName: string;
  lastName: string;
};

export type AddProjectType = {
  id?: string,
  project_name: string;
  color: string;
  infavorite?: string
}

export type ProjectStoreTypes = {
  loading: Boolean,
  favorites : AddProjectType[],
  allProjects: AddProjectType[],
}

export type LoginFieldsType = {
  usernameOrEmail: string;
  password: string;
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

export type ProjectCardType = {
  proj : AddProjectType,
  project_type: string
}