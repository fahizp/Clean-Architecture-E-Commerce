import express from "express";
import { currentUser, requireAuth, isAdmin } from "@ecom-microservie/common";

import {userController} from '../libs/controllers'

export default (dependencies: any) => {
  const router = express.Router();

  const { getProfilesController, updateProfileController } = userController(dependencies);

  router.get("/allusers", currentUser, requireAuth, isAdmin, getProfilesController);

  router.patch("/block/:userId", currentUser, requireAuth, isAdmin, updateProfileController);

  return router;
};
