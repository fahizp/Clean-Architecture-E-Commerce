export interface DepenteniciesData {
  useCases: UseCaseData;
  repository: RepositoryData;
}

export interface UseCaseData {
  createProduct_UseCase: any;
  getProduct_UseCase: any;
  deleteProduct_UseCase: any;
  getAllProduct_UseCase: any;
  updateProduct_UseCase: any;
}

export interface RepositoryData {
  productRepository: any;
}
