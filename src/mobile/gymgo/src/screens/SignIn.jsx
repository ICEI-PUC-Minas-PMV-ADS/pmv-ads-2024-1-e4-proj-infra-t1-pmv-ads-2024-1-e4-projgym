import { useContext, useState } from 'react';
import { userlogin } from '../services/authServices';
import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import AuthContext from 'src/context/authContext';

import Logo from "@assets/logo.png";
import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
    const { signed, setSigned, setUserId } = useContext(AuthContext);

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [aviso, setAviso] = useState('');

    function handleNewAccount() {
        navigation.navigate("signUp");
    }

    async function handleLogin(email, password) {
        try {
            const res = await userlogin(email, password);
            setUserId(res.data.userId);
            setSigned(true);
        } catch (err) {
            setAviso(err.response?.data?.message || 'Erro ao fazer login' );
            console.log(err, "o Erro é aqui")
        }
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <Image
                source={BackgroundImg}
                defaultSource={BackgroundImg}
                alt="Aparece na tela uma sala de treinamento de boxe com alguns sacos de boxe"
                resizeMode="contain"
                position="absolute"
            />
            <VStack flex={1} px={10} pb={16}>
                <Center my={24}>
                    <Image source={Logo} alt="GymGo" />
                    <Text color="gray.100" fontSize="sm">
                        Sua motivação diária
                    </Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Acesse sua conta
                    </Heading>

                    {aviso ? <Text style={{ color: "#FFF" }}>{aviso}</Text> : null}

                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        placeholder="Senha"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Button title="Acessar" onPress={() => handleLogin(email, password)} />
                </Center>

                <Center mt={24}>
                    <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
                        Ainda não tem acesso?
                    </Text>

                    <Button
                        title="Criar conta"
                        variant="outline"
                        onPress={handleNewAccount}
                    />
                </Center>
            </VStack>
        </ScrollView>
    );
}
