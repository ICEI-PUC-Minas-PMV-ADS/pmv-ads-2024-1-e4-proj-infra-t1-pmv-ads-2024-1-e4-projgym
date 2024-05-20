import { TouchableOpacity } from "react-native";
import { Heading, HStack, VStack, Text, Icon } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from "./UserPhoto";



export function HomeHeader(){
    return (
        <HStack backgroundColor="gray.600" pt={16} pb={5} px={8} alignItems="center" >
            <UserPhoto 
                source={{ uri: 'https://github.com/rafabelisario.png'}}
                alt="Imagem do usuário"
                size={16}
                mr={4}
            />
            <VStack flex={1} >
                <Text color="yellow.300" fontSize="md" >
                    Olá,
                </Text>

                <Heading color="yellow.300" fontSize="md">
                    Rafaella
                </Heading>
            </VStack>

            <TouchableOpacity >
            < Icon 
                as={MaterialIcons}
                name="logout" 
                color="gray.200"
                size={7} 
                />
            </TouchableOpacity>
        </HStack>
    )
}