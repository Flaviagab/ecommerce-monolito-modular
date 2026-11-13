import { Router } from 'express';
const router = Router();
router.get('/', (_req, res) => {
  res.status(501).json({ message: 'Consulta de pedidos: caso de uso pendente' });
});
export default router;
