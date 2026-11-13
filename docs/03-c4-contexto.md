# 03 — C4: Diagrama de Contexto

```mermaid
C4Context
    title Diagrama de Contexto — E-commerce
    Person(cliente, "Cliente", "Pessoa que consulta produtos e realiza compras")
    System(ecommerce, "Sistema E-commerce", "Monólito modular responsável pelo catálogo, carrinho, checkout, usuários, pedidos e pagamentos")
    System_Ext(pagamento, "Provedor de Pagamento", "Serviço externo simulado para autorizar ou recusar pagamentos")
    System_Ext(notificacoes, "Serviço de Notificações", "Envio de e-mails e mensagens; integração futura")

    Rel(cliente, ecommerce, "Consulta produtos e realiza compras", "HTTPS/JSON")
    Rel(ecommerce, pagamento, "Solicita processamento", "HTTP/JSON — simulado")
    Rel(ecommerce, notificacoes, "Enviará eventos/notificações", "Futuro")
```

## Leitura
O Cliente interage com o Sistema E-commerce. O sistema concentra os módulos internos em uma única aplicação. O provedor de pagamento é externo e simulado nesta versão. Notificações ficam fora do escopo inicial e são uma possibilidade futura.
