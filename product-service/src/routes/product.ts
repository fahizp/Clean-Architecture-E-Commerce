import express from "express";
// import { currentUser, requireAuth, isAdmin } from "@ecom-microservie/common";

import { productController } from "../libs/controllers";

export default (dependencies: any) => {
  const router = express.Router();

  const { createProductController, getProductController, deleteProductController, updateProductController } = productController(dependencies);

  router.post("/", createProductController);

  router.get("/product/:productId", getProductController);

  router.delete("/product/:productId", deleteProductController);

  router.put("/product/:productId", updateProductController);

  return router;
};
