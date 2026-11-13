export interface ProcessPaymentInput { orderId: string; amount: number }
export class ProcessPaymentUseCase {
  async execute(_input: ProcessPaymentInput): Promise<{ status: string }> {
    // TODO: simular aprovacao/recusa sem integrar provedor real.
    throw new Error('Caso de uso ainda nao implementado');
  }
}
