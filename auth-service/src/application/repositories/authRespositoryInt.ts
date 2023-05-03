import { AuthrepositoryImpl } from "../../frameworks/database/mongodb/repositories/authRepositoryIml";

export const AuthRepositoryInt = (repository: ReturnType<AuthrepositoryImpl>) => {
  const createUser = async (Name: string, Email: string, Password: string) => await repository.createUser(Name, Email, Password);

  const userLogin = async (Email: string, Password: string) => await repository.userLogin(Email, Password);

  return { createUser, userLogin };
};


export type AuthRepositoryInt = typeof AuthRepositoryInt;
