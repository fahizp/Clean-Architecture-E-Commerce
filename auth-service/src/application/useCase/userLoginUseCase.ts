import { AuthRepositoryInt } from "../repositories/authRespositoryInt";

const UserLogin = async ( Email: string, Password: string, dbAuthRepository: ReturnType<AuthRepositoryInt>) => {
  await dbAuthRepository.userLogin( Email, Password);
};

export default UserLogin;