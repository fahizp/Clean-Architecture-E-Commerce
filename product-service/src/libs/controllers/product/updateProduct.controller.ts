import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "@ecom-microservie/common";
import { ProductUpdatedPublisher } from "../../../events/publisher/product-updated-event";
import { natsWrapper } from "../../../nats-wrapper";
export default (dependencies: any): any => {
  const {
    useCases: { updateProduct_UseCase },
  } = dependencies;

  const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { productId } = req.params;

      const product = await updateProduct_UseCase(dependencies).execute(productId, req.body);

      if (!productId) throw new BadRequestError("No Such Product Found");

      await new ProductUpdatedPublisher(natsWrapper.client).publish({
        title: product.title,
        description: product.description,
        price: product.price,
        stock: product.stock,
        image: product.image,
        id: product.id,
      });
        
      res.json(product);
    } catch (error) {
      throw new Error(error);
    }
  };
  return updateProduct;
};
