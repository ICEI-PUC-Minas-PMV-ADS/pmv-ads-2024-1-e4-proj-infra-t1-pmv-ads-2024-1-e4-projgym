import React, { useState, useEffect } from 'react';
import { HStack, Heading, Icon, Text, VStack, Image, Box, ScrollView } from 'native-base';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';

import CheckSvg from '../assets/check.svg';

// export function Group() { 
//     const navigation = useNavigation<AppNavigatorRoutesProps>();
//     const route = useRoute();
//     const group = route.params.data;
//     console.log(group);
// }

export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const route = useRoute();
    const exercise = route.params.data;
    console.log(exercise);

    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        let timer;
        if (isChecked) {
            timer = setTimeout(() => {
                setIsChecked(false);
            }, 2000); // 2000 ms = 2 seconds
        }
        return () => clearTimeout(timer); // Cleanup the timer
    }, [isChecked]);

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name="arrow-left" color="yellow.500" size={6} />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" fontFamily="heading" flexShrink={1}>
                        {exercise.name}
                    </Heading>

                    <HStack alignItems="center">
                        <BodySvg />
                        <Text color="gray.200" ml={1} textTransform="capitalize">
                           Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>

            <ScrollView>
                <VStack p={8}>
                    <Image
                        w="full"
                        h={80}
                        source={{ uri: exercise.demo }}
                        alt="Nome do exercício"
                        mb={3}
                        resizeMode="cover"
                        rounded="lg"
                    />

                    <Box bg="gray.600" rounded="md" pb={4} px={4}>
                        <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
                            <Text color="gray.200" ml="2" fontSize="25">
                                {exercise.series} Séries
                            </Text>
                        </HStack>

                        <HStack>
                            <RepetitionsSvg />
                            <Text color="gray.200" ml="2" fontSize="25" marginLeft="10">
                                {exercise.repetitions} Repetições
                            </Text>
                        </HStack>

                        <HStack alignItems="center" justifyContent="space-around" mt={5}>
                            <Button onPress={() => setIsChecked(true)} title="Marcar como realizado" />
                        </HStack>
                    </Box>
                </VStack>
            </ScrollView>

            {isChecked && (
                <View style={styles.overlay}>
                    <CheckSvg width="58%" height="58%" />
                </View>
            )}
        </VStack>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
