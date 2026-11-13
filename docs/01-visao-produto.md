# 01 — Visão do Produto

## Problema
Clientes precisam encontrar produtos, montar um carrinho e concluir compras em um único ambiente. O processo deve manter os dados de pedidos e pagamentos organizados e consistentes.

## Público
Consumidores que compram pela internet e administradores responsáveis pelo catálogo e acompanhamento dos pedidos.

## Objetivos
- Disponibilizar catálogo de produtos.
- Permitir cadastro e autenticação de usuários.
- Permitir adicionar e remover itens do carrinho.
- Gerar pedidos a partir do carrinho.
- Simular o processamento de pagamentos.
- Manter os dados persistidos em PostgreSQL.

## Critérios de sucesso
- Usuário consegue consultar produtos.
- Usuário consegue montar um carrinho.
- Checkout gera pedido com itens e total coerentes.
- Pagamento simulado atualiza o status do pedido.
- API possui documentação, logs, healthcheck e métricas.
