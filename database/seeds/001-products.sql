INSERT INTO products (name, sku, price, stock)
VALUES
  ('Teclado mecanico', 'TEC-001', 249.90, 20),
  ('Mouse sem fio', 'MOU-001', 89.90, 35),
  ('Monitor 24 polegadas', 'MON-001', 799.00, 10)
ON CONFLICT (sku) DO NOTHING;
