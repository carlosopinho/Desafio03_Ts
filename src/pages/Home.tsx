import React, { useState, useContext } from "react";
import { Box, Button, Center, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>(''); // Adicionando estado para a senha
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string, senha: string) => {
    const loggedIn = await login(email, senha);

    if (!loggedIn) {
      return alert('Email ou senha inválidos');
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate('/conta/1');
  };

  return (
    <Center minHeight="100vh" backgroundColor="#9413dc">
      <Box padding="50px" width="450px" marginTop="-50px"> {/* Aumentando o tamanho do formulário e adicionando espaçamento vertical */}
        <Card>
          <VStack spacing="4" align="center">
            <h1>Faça o login</h1>
            <Input
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              borderRadius="full" // Borda arredondada
              borderColor="gray.300" // Cor da borda
              _focus={{ borderColor: "gray.500" }} // Cor da borda quando o input está em foco
              textAlign="center" // Centraliza o texto
            />
            <Input
              placeholder="Senha"
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              borderRadius="full" // Borda arredondada
              borderColor="gray.300" // Cor da borda
              _focus={{ borderColor: "gray.500" }} // Cor da borda quando o input está em foco
              textAlign="center" // Centraliza o texto
            />
            <Button
              onClick={() => validateUser(email, senha)}
              colorScheme="purple"
              borderRadius="full" // Borda arredondada
              paddingX="40px" // Espaçamento horizontal interno
              paddingY="10px" // Espaçamento vertical interno
              fontSize="lg" // Tamanho da fonte
              fontWeight="bold" // Peso da fonte
            >
              Entrar
            </Button>
          </VStack>
        </Card>
      </Box>
    </Center>
  );
};

export default Home;