export class CreateOrderUseCase {
  async execute(_userId: string): Promise<void> {
    // TODO: validar carrinho, calcular total e criar pedido/itens em transacao.
    throw new Error('Caso de uso ainda nao implementado');
  }
}
