# 04 — C4: Diagrama de Containers

```mermaid
C4Container
    title Diagrama de Containers — E-commerce
    Person(cliente, "Cliente", "Web ou aplicativo")
    System_Boundary(sistema, "Sistema E-commerce") {
      Container(api, "API / Backend Monolítico", "Node.js, TypeScript, Express", "Expõe REST, executa os módulos e contém observabilidade Pino + /metrics")
      ContainerDb(db, "Banco de Dados", "PostgreSQL", "Armazena usuários, produtos, carrinhos, pedidos e pagamentos")
    }
    System_Ext(provedor, "Provedor de Pagamento", "Simulado")

    Rel(cliente, api, "Requisições REST", "HTTPS/JSON")
    Rel(api, db, "Lê e grava dados", "SQL")
    Rel(api, provedor, "Solicita pagamento", "HTTP — simulado")
```

## Execução
- API: processo Node.js/Express.
- PostgreSQL: container Docker.
- Pino e métricas Prometheus: bibliotecas embutidas na API, não são containers separados.
