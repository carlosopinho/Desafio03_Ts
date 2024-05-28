import { useContext } from "react";
import { Center, SimpleGrid, Text, Box } from "@chakra-ui/react";
import { AppContext } from "../components/AppContext";

const UserInfoPage = () => {
  const { user, isLoggedIn } = useContext(AppContext);

  if (!isLoggedIn) {
    return (
      <Center minHeight="100vh" backgroundColor="#9413dc">
        <SimpleGrid columns={1} spacing={8} textAlign="center" padding={8}>
          <Box
            backgroundColor="white"
            borderRadius="lg"
            boxShadow="xl"
            padding={8}
            textAlign="center"
          >
            <Text fontSize="3xl" fontWeight="bold">
              Faça o login
            </Text>
          </Box>
        </SimpleGrid>
      </Center>
    );
  }

  return (
    <Center minHeight="100vh" backgroundColor="#9413dc">
      <SimpleGrid columns={1} spacing={8} textAlign="center" padding={8}>
        <Box
          backgroundColor="white"
          borderRadius="lg"
          boxShadow="xl"
          padding={8}
          textAlign="center"
        >
          <Text fontSize="3xl" fontWeight="bold">
            Informações da Conta
          </Text>
          <Text fontSize="xl">Nome: {user}</Text>
          <Text fontSize="xl">Email: {user.toLowerCase().replace(" ", ".")}@dio.bank</Text>
        </Box>
      </SimpleGrid>
    </Center>
  );
};

export default UserInfoPage;
