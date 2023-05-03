import { Request, Response, NextFunction, response } from "express";
import { AuthrepositoryImpl } from "../frameworks/database/mongodb/repositories/authRepositoryIml";
import { AuthRepositoryInt } from "../application/repositories/authRespositoryInt";
import createNewUser from "../application/useCase/registerUser";
import UserLogin from "../application/useCase/userLoginUseCase";

const authController = (AuthrepositoryImpl: AuthrepositoryImpl, AuthRepositoryInt: AuthRepositoryInt) => {
  const dbAuthRepository = AuthRepositoryInt(AuthrepositoryImpl());

  const createUser = (req: Request, res: Response) => {
    const { Name, Email, Password }: { Name: string; Email: string; Password: string } = req.body;

    createNewUser(Name, Email, Password, dbAuthRepository)
      .then((response) => {
        res.json({ status: "success", message: response });
      })
      .catch((err) => {
        res.send(err).status(404);
      });
  };

  const userLogin = (req: Request, res: Response) => {
    const { Email, Password }: { Email: string; Password: string } = req.body;

    UserLogin(Email, Password, dbAuthRepository)
      .then((response) => {
        res.json({ status: "success", message: response });
      })
      .catch((err) => {
        res.send(err).status(404);
      });
  };

  return { userLogin, createUser}
};

export default authController;