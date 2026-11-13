# ADR-001 — Adoção de Monólito Modular

- **Status:** Aceita
- **Contexto:** O e-commerce está em estágio inicial, com escopo conhecido e equipe/infraestrutura limitadas. A separação em serviços independentes aumentaria o custo operacional.
- **Decisão:** Construir uma única aplicação backend organizada em módulos de negócio (`catalogo`, `carrinho`, `pagamento`, `usuarios`, `pedidos`), com limites internos e camadas explícitas.
- **Justificativa:** Simplicidade de desenvolvimento e deploy atômico, menor complexidade operacional e alta coesão inicial.
- **Consequências positivas:** execução e depuração simples; transações locais; menor custo de infraestrutura.
- **Consequências negativas:** módulos podem ficar acoplados e o deploy é compartilhado.
- **Mitigações:** regras de dependência entre camadas, APIs internas claras, testes por módulo e evitar acesso direto às tabelas de outro módulo.
- **Revisão:** reavaliar extração de serviço somente quando houver necessidade comprovada de escala, autonomia de deploy ou isolamento.
