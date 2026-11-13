import { Router } from 'express';
const router = Router();
router.post('/signup', (_req, res) => {
  res.status(501).json({ message: 'Cadastro: caso de uso pendente' });
});
router.post('/login', (_req, res) => {
  res.status(501).json({ message: 'Login: caso de uso pendente' });
});
export default router;
