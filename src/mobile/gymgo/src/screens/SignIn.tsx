import { useState } from 'react';
import { userlogin } from '../services/authServices'
import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import Logo from "@assets/logo.png";
import BackgroundImg from "@assets/background.png";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [email, setemail] = useState<string>()
  const [password, setpassword] = useState<string>()
  function handleNewAccount() {
    navigation.navigate("signUp");
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

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none" value={email} onChangeText={email => setemail(email)}
          />
          <Input placeholder="Senha" secureTextEntry value={password} onChangeText={password => setpassword(password)} />

          <Button title="Acessar" onPress={() => userlogin(email, password)} />

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
