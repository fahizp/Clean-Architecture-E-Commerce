import express from "express";
import { requireAuth, isAdmin, currentUser } from "@ecom-microservie/common";

import { productController } from "../libs/controllers";
import { DepenteniciesData } from "../libs/entities/interface";

export default (dependencies: DepenteniciesData) => {
  const router = express.Router();
  const { getProductController, getAllProductsController } =
    productController(dependencies);

  router.get("/allProducts", getAllProductsController);
  router.get("/:productId", getProductController);

  return router;
};
