# 06 — Modelo de Dados

## Tabelas iniciais

| Tabela | Campos principais | Relacionamentos |
|---|---|---|
| users | id, email, password_hash, role | 1:N com orders; 1:1 com carts |
| products | id, name, sku, price, stock | referenciada por cart_items e order_items |
| carts | id, user_id | N:1 com users; 1:N com cart_items |
| cart_items | id, cart_id, product_id, qty, unit_price | N:1 com carts e products |
| orders | id, user_id, total, status, created_at | N:1 com users; 1:N com order_items; 1:N com payments |
| order_items | id, order_id, product_id, qty, unit_price | N:1 com orders e products |
| payments | id, order_id, provider, status, payload | N:1 com orders |

## Diagrama ER

```mermaid
erDiagram
  USERS ||--o| CARTS : possui
  CARTS ||--o{ CART_ITEMS : contem
  PRODUCTS ||--o{ CART_ITEMS : aparece_em
  USERS ||--o{ ORDERS : realiza
  ORDERS ||--|{ ORDER_ITEMS : contem
  PRODUCTS ||--o{ ORDER_ITEMS : vendido_em
  ORDERS ||--o{ PAYMENTS : recebe

  USERS {
    uuid id PK
    varchar email UK
    text password_hash
    varchar role
  }
  PRODUCTS {
    uuid id PK
    varchar name
    varchar sku UK
    decimal price
    int stock
  }
  CARTS {
    uuid id PK
    uuid user_id FK
  }
  CART_ITEMS {
    uuid id PK
    uuid cart_id FK
    uuid product_id FK
    int qty
    decimal unit_price
  }
  ORDERS {
    uuid id PK
    uuid user_id FK
    decimal total
    varchar status
    timestamp created_at
  }
  ORDER_ITEMS {
    uuid id PK
    uuid order_id FK
    uuid product_id FK
    int qty
    decimal unit_price
  }
  PAYMENTS {
    uuid id PK
    uuid order_id FK
    varchar provider
    varchar status
    jsonb payload
  }
```

## Decisões importantes
- Valores monetários usam `NUMERIC(12,2)`, evitando imprecisão de ponto flutuante.
- `unit_price` é armazenado no item do carrinho/pedido para preservar o preço aplicado naquele momento.
- `password_hash` nunca armazena senha em texto puro.
- `payload` é JSONB para guardar dados técnicos do retorno simulado do pagamento.
- A migration inicial cria chaves estrangeiras, unicidade e restrições básicas.
