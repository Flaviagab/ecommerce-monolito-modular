# 02 — Requisitos

## Funcionais
- RF01: listar produtos disponíveis no catálogo.
- RF02: cadastrar usuário e realizar login.
- RF03: adicionar e remover itens do carrinho.
- RF04: realizar checkout e gerar pedido.
- RF05: consultar pedidos do usuário.
- RF06: registrar pagamento simulado e atualizar seu status.

## Não funcionais
- RNF01: API HTTP REST versionada em `/v1`.
- RNF02: persistência relacional em PostgreSQL.
- RNF03: aplicação organizada em módulos com responsabilidades definidas.
- RNF04: execução local reproduzível por Docker Compose.
- RNF05: erros devem produzir respostas HTTP coerentes.
- RNF06: código deve permitir testes automatizados.

## Segurança
- Senhas armazenadas somente como hash forte (ex.: Argon2id ou bcrypt).
- Autenticação por token e autorização por perfil.
- Validar e normalizar entradas.
- Usar queries parametrizadas.
- Não registrar senhas, tokens ou dados sensíveis nos logs.
- Segredos devem ficar em variáveis de ambiente, nunca no Git.
- Aplicar rate limiting e HTTPS antes de disponibilizar publicamente.

## Observabilidade
- `x-request-id`: identificador por requisição, devolvido na resposta.
- Pino: logs estruturados com método, rota, status e duração.
- `GET /health`: verifica se a API está respondendo.
- `GET /metrics`: métricas Prometheus, incluindo total e duração das requisições.
- Em uma evolução, adicionar verificação de conectividade do banco e tracing distribuído.
