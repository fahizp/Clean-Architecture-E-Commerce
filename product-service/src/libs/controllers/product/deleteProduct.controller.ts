import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@ecom-microservie/common";
import { ProductDeletedPublisher } from "../../../events/publisher/product-deleted-event";
import { natsWrapper } from "../../../nats-wrapper";

export default (dependencies: any): any => {
  const { useCases: { deleteProduct_UseCase } } = dependencies;

  const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { productId } = req.params;

      const product = await deleteProduct_UseCase(dependencies).execute({ productId });

      if (!productId) throw new BadRequestError("No Such Product Found");

      await new ProductDeletedPublisher(natsWrapper.client).publish({ id: product.id });

      res.json({ message: "deleted" });
    } catch (error) {
      throw new Error(error);
    }
  };
  return deleteProduct;
};
