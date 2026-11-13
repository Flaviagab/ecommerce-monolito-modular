# 05 — C4: Componentes

O container principal é a API monolítica. Internamente, ela é dividida em cinco módulos. Cada módulo segue as camadas `api → app → domain → infra`.

```mermaid
flowchart TB
  subgraph API["API / Backend Monolítico — Express"]
    subgraph CAT["catalogo"]
      CATAPI["api: rotas e controllers"]
      CATAPP["app: ListProducts"]
      CATDOM["domain: Product"]
      CATINF["infra: ProductRepository"]
      CATAPI --> CATAPP --> CATDOM
      CATAPP --> CATINF
    end
    subgraph CAR["carrinho"]
      CARAPI["api: rotas"]
      CARAPP["app: AddItem / RemoveItem"]
      CARDOM["domain: Cart / CartItem"]
      CARINF["infra: CartRepository"]
      CARAPI --> CARAPP --> CARDOM
      CARAPP --> CARINF
    end
    subgraph PAG["pagamento"]
      PAGAPI["api: rotas"]
      PAGAPP["app: ProcessPayment"]
      PAGDOM["domain: Payment"]
      PAGINF["infra: SimulatedPaymentProvider"]
      PAGAPI --> PAGAPP --> PAGDOM
      PAGAPP --> PAGINF
    end
    subgraph USU["usuarios"]
      USUAPI["api: rotas"]
      USUAPP["app: Signup / Login"]
      USUDOM["domain: User"]
      USUINF["infra: UserRepository"]
      USUAPI --> USUAPP --> USUDOM
      USUAPP --> USUINF
    end
    subgraph PED["pedidos"]
      PEDAPI["api: rotas"]
      PEDAPP["app: Checkout / GetOrders"]
      PEDDOM["domain: Order / OrderItem"]
      PEDINF["infra: OrderRepository"]
      PEDAPI --> PEDAPP --> PEDDOM
      PEDAPP --> PEDINF
    end
  end
  DB[("PostgreSQL")]
  CATINF --> DB
  CARINF --> DB
  PAGINF --> DB
  USUINF --> DB
  PEDINF --> DB
```

## Responsabilidade das camadas
- `api`: recebe HTTP, valida o formato da entrada e transforma o resultado em resposta.
- `app`: coordena os casos de uso e as regras do fluxo da aplicação.
- `domain`: contém entidades, tipos e regras de negócio independentes de Express e PostgreSQL.
- `infra`: implementa persistência e integrações externas.

## Regra de dependência
A camada `api` chama `app`. A camada `app` depende de contratos/abstrações do domínio ou da aplicação. A infraestrutura implementa esses contratos. O domínio não deve importar Express, PostgreSQL ou bibliotecas de infraestrutura.
