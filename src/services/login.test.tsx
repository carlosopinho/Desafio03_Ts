import { login } from "./login";

describe('login', () => {

    const mockEmail = 'carlos@dio.bank';
    const mockSenhaCorreta = '123456'; // Alterei para a senha correta conforme a API
    const mockSenhaIncorreta = 'senhaIncorreta';

    it('Deve retornar verdadeiro para um email válido e senha correta', async () => {
        const response = await login(mockEmail, mockSenhaCorreta);
        expect(response).toBeTruthy();
    });

    it('Deve retornar falso para um email válido e senha incorreta', async () => {
        const response = await login(mockEmail, mockSenhaIncorreta);
        expect(response).toBeFalsy();
    });

    it('Deve retornar falso para um email inválido e qualquer senha', async () => {
        const response = await login('email@invalido.com', mockSenhaCorreta);
        expect(response).toBeFalsy();
    });
});