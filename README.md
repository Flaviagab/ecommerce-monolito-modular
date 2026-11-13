# E-commerce — Monólito Modular

Projeto inicial para exercício de documentação arquitetural e esqueleto de aplicação.

## Stack
- Node.js + TypeScript + Express
- PostgreSQL via Docker Compose
- Pino para logs estruturados
- prom-client para métricas Prometheus
- Jest + Supertest para testes

## Pré-requisitos
- Node.js 20+
- npm
- Docker Desktop

## Como executar
1. Copie `.env.example` para `.env`.
2. Suba o banco: `docker compose up -d postgres`
3. Instale dependências: `npm install`
4. Execute as migrations: `npm run db:migrate`
5. Insira dados de exemplo: `npm run db:seed`
6. Inicie em desenvolvimento: `npm run dev`

API: http://localhost:3000  
Healthcheck: http://localhost:3000/health  
Métricas: http://localhost:3000/metrics

## Scripts
- `npm run dev`: inicia com recarga em desenvolvimento
- `npm run build`: compila TypeScript
- `npm start`: inicia a versão compilada
- `npm test`: executa testes
- `npm run typecheck`: verifica tipos
- `npm run db:migrate`: aplica migrations SQL
- `npm run db:seed`: executa seed

## Estrutura
```text
src/
  app.ts
  server.ts
  config/
  shared/
    database/
    observability/
    http/
  modules/
    catalogo/
    carrinho/
    pagamento/
    usuarios/
    pedidos/
database/
  migrations/
  seeds/
docs/
  adrs/
```

Cada módulo segue `api → app → domain → infra`. As rotas estão registradas, mas os casos de uso de negócio permanecem como stubs intencionais para serem implementados durante o exercício.

## Observações
- O provedor de pagamento é simulado; nenhuma cobrança real é realizada.
- O login e cadastro estão documentados no OpenAPI, mas os casos de uso ainda não implementam autenticação.
- Não use este esqueleto em produção sem implementar autenticação, autorização, validações, tratamento de erros, políticas de CORS, rate limiting, gestão de segredos e testes de integração.
