# ADR-002 — Adoção do PostgreSQL

- **Status:** Aceita
- **Contexto:** O sistema precisa armazenar usuários, catálogo, carrinhos, pedidos e pagamentos, com relacionamentos e operações transacionais.
- **Decisão:** Utilizar PostgreSQL como banco relacional principal.
- **Justificativa:** Consistência relacional, suporte a transações, integridade referencial, tipos robustos como UUID e JSONB e maturidade do ecossistema.
- **Consequências positivas:** integridade por chaves e constraints; transações para checkout; consultas relacionais.
- **Consequências negativas:** exige modelagem e gestão de migrations; mudanças de schema precisam ser coordenadas.
- **Mitigações:** versionar migrations, revisar índices e manter backups no ambiente real.
