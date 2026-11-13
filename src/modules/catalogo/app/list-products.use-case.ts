import { Product } from '../domain/product';

export interface ListProductsRepository {
  list(): Promise<Product[]>;
}

export class ListProductsUseCase {
  constructor(private readonly repository: ListProductsRepository) {}
  async execute(): Promise<Product[]> {
    return this.repository.list();
  }
}
