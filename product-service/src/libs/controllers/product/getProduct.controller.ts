import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@ecom-microservie/common";

export default (dependencies: any): any => {
  const { useCases: { getProduct_UseCase } } = dependencies;

  const getProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { productId } = req.params;

      const product = await getProduct_UseCase(dependencies).execute({ productId });

      if (!productId) throw new BadRequestError("No Such Product Found");

      res.json(product);
    } catch (error) {
      throw new Error(error);
    }
  };
  return getProduct;
};
