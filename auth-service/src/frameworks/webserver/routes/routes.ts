import { Application } from "express";
import authController from "../../../controllers/authController";
import { AuthrepositoryImpl } from "../../database/mongodb/repositories/authRepositoryIml";
import { AuthRepositoryInt } from "../../../application/repositories/authRespositoryInt";

const routes = (app: Application) => {
  const controller = authController(AuthrepositoryImpl, AuthRepositoryInt);
  app.route("/api/v1/Auth-ser/register").post(controller.createUser);
  app.route("/api/v1/Auth-ser/login").post(controller.userLogin);
};

export default routes;
