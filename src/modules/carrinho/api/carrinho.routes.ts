import { Router } from 'express';
const router = Router();

router.post('/items', (_req, res) => {
  res.status(501).json({ message: 'Adicionar item: caso de uso pendente' });
});
router.delete('/items/:itemId', (_req, res) => {
  res.status(501).json({ message: 'Remover item: caso de uso pendente' });
});

export default router;
