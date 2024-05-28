import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../services/storage';
import { AppContext } from './AppContext';

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Flex backgroundColor='gray.700' padding='10px' alignItems='center' justifyContent='space-between'>
      <Box>
        <Text fontSize='3xl' fontWeight='bold' color='white'>Dio Bank</Text>
      </Box>
      {isLoggedIn && (
        <>
          <Spacer />
          <Button
            colorScheme='orange'
            variant='outline'
            onClick={logout}
          >
            Sair
          </Button>
        </>
      )}
    </Flex>
  );
};