import { Product, ProductData } from "../../entities";


export const updateProduct_UseCase  = (dependencies: any) => {
    const { repository: { productRepository} }  = dependencies;

    if(!productRepository) throw new Error('The product repository should be dependencie');

    const execute = (productId: string, data: any) => productRepository.updateProduct(productId)
    
    return { execute }
}


// { productId }: {productId:string}, {data}: {data:ProductData}