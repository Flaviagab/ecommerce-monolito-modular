import { AddCartItemInput } from '../domain/cart';

export class AddCartItemUseCase {
  async execute(_input: AddCartItemInput): Promise<void> {
    // TODO: localizar/criar carrinho, validar estoque e preco e inserir item.
    throw new Error('Caso de uso ainda nao implementado');
  }
}
