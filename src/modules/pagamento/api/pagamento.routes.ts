import { Router } from 'express';
const router = Router();
router.post('/', (_req, res) => {
  res.status(501).json({ message: 'Pagamento simulado: caso de uso pendente' });
});
export default router;
