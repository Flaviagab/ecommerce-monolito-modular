import { Router } from 'express';
import { ListProductsUseCase } from '../app/list-products.use-case';
import { PostgresProductRepository } from '../infra/postgres-product.repository';

const router = Router();

router.get('/produtos', async (_req, res, next) => {
  try {
    const useCase = new ListProductsUseCase(new PostgresProductRepository());
    res.json({ data: await useCase.execute() });
  } catch (error) { next(error); }
});

export default router;
