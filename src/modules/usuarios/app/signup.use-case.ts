export class SignupUseCase {
  async execute(_input: { email: string; password: string }): Promise<void> {
    // TODO: validar email, gerar hash seguro e persistir usuario.
    throw new Error('Caso de uso ainda nao implementado');
  }
}
