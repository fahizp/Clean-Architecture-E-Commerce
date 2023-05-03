import { AuthRepositoryInt } from "../repositories/authRespositoryInt";

const createNewUser = async (Name: string, Email: string, Password: string, dbAuthRepository: ReturnType<AuthRepositoryInt>) => {
  await dbAuthRepository.createUser(Name, Email, Password);
};

export default createNewUser;