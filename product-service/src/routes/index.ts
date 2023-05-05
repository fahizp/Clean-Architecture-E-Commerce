import express from "express";
import userRoutes from "./user";
import productRoutes from "./product";

export const routes = (dependencies: any) => {
  const routes = express.Router();

  routes.use("/admin", userRoutes(dependencies));

  routes.use("/product", productRoutes(dependencies));

  return routes;
};
