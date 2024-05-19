import { VStack, Image, Text, Center, Heading } from "native-base";

import BackgroundImg from '@assets/background.png'

export function SignIn(){
    return (
        <VStack flex={1} bg="gray.700">
            <Image
            source={BackgroundImg}
            alt="Aparece na tela uma sala de treinamento de boxe com alguns sacos de boxe"
            resizeMode="contain"
            position="absolute"
            />

        <Center my={24}>
            <Text color="gray.100" fontSize="sm">
                Sua motivação diária
            </Text>
        </Center>

        <Center>
            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                Acesse sua conta
            </Heading>
        </Center>

        </VStack>
    );
}