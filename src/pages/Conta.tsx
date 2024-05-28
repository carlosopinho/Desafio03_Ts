import { Button, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../components/AppContext";

interface UserData {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>();
    const { id } = useParams();
    const navigate = useNavigate();

    const { isLoggedIn } = useContext(AppContext);

    !isLoggedIn && navigate('/');

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api;
            setUserData(data);
        };

        getData();
    }, []);

    const actualData = new Date();

    if (userData && id !== userData.id) {
        navigate('/');
    }

    return (
        <Center minHeight="100vh" backgroundColor="#9413dc">
            <SimpleGrid columns={2} spacing={8} padding={16}>
                {userData === undefined || userData === null ? (
                    <Center>
                        <Spinner size="xl" color="white" />
                    </Center>
                ) : (
                    <>
                        <CardInfo
                            mainContent={`Bem vinda ${userData?.name}`}
                            content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
                        />
                        <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
                    </>
                )}
            </SimpleGrid>
            <Center marginTop={8}>
                <Link to="/userinfo" style={{ textDecoration: "none" }}>
                    <Button colorScheme="teal" size="lg">
                        Ver informações da conta
                    </Button>
                </Link>
            </Center>
        </Center>
    );
};

export default Conta;