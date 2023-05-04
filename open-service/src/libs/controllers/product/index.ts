import getProductController from "./getProduct.controller";
import getAllProductsController from "./getAllProducts.controller";

export default (dependencies: any) => {
  return {
    getProductController: getProductController(dependencies),
    getAllProductsController: getAllProductsController(dependencies),
  };
}