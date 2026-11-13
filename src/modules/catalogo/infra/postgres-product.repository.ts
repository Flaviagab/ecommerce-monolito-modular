import { pool } from '../../../shared/database/pool';
import { Product } from '../domain/product';
import { ListProductsRepository } from '../app/list-products.use-case';

export class PostgresProductRepository implements ListProductsRepository {
  async list(): Promise<Product[]> {
    const result = await pool.query(
      'SELECT id, name, sku, price::float8 AS price, stock FROM products ORDER BY name'
    );
    return result.rows;
  }
}
