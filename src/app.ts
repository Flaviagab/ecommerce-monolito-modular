import express, { Request, Response, NextFunction } from 'express';
import pinoHttp from 'pino-http';
import { logger } from './shared/observability/logger';
import { requestId } from './shared/http/request-id';
import { register, httpRequestsTotal, httpRequestDuration } from './shared/observability/metrics';
import catalogoRoutes from './modules/catalogo/api/catalogo.routes';
import carrinhoRoutes from './modules/carrinho/api/carrinho.routes';
import pagamentoRoutes from './modules/pagamento/api/pagamento.routes';
import usuariosRoutes from './modules/usuarios/api/usuarios.routes';
import pedidosRoutes from './modules/pedidos/api/pedidos.routes';
import { notFound } from './shared/http/not-found';

export const app = express();
app.use(express.json());
app.use(requestId);
app.use(pinoHttp({ logger }));

app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on('finish', () => {
    const route = req.route?.path ? String(req.route.path) : req.path;
    httpRequestsTotal.inc({ method: req.method, route, status_code: String(res.statusCode) });
    end({ method: req.method, route, status_code: String(res.statusCode) });
  });
  next();
});

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', service: 'ecommerce-api' });
});
app.get('/metrics', async (_req: Request, res: Response) => {
  res.setHeader('Content-Type', register.contentType);
  res.send(await register.metrics());
});

app.use('/v1/catalogo', catalogoRoutes);
app.use('/v1/carrinho', carrinhoRoutes);
app.use('/v1/pagamentos', pagamentoRoutes);
app.use('/v1/usuarios', usuariosRoutes);
app.use('/v1/pedidos', pedidosRoutes);
app.post('/v1/checkout', (_req, res) => {
  res.status(501).json({ message: 'Checkout: caso de uso pendente' });
});

app.use(notFound);
app.use((error: Error, req: Request, res: Response, _next: NextFunction) => {
  logger.error({ err: error, requestId: req.requestId }, 'Erro nao tratado');
  res.status(500).json({ error: 'Erro interno', requestId: req.requestId });
});
