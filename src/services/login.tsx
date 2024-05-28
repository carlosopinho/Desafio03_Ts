import { api } from "../api";

export const login = async (email: string, senha: string): Promise<boolean> => {
    try {
        // Simulando uma requisição assíncrona para obter os dados do usuário
        const userData: any = await api;

        // Verifica se os dados do usuário foram encontrados
        if (!userData) {
            return false; // Usuário não encontrado
        }

        // Verifica se o email e a senha fornecidos correspondem aos dados do usuário
        if (email === userData.email && senha === userData.password) {
            return true; // Login bem-sucedido
        } else {
            return false; // Email ou senha incorretos
        }
    } catch (error) {
        console.error("Erro durante o login:", error);
        return false; // Tratamento de erro: login falhou
    }
};