import { useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text, useNativeBase } from 'native-base';

import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group'
import { ExerciseCard } from '@components/ExerciseCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function Home() {
 const [groups, setGroups] = useState(['costas', 'bíceps', 'trícpes', 'ombro']);
 const [exercises, setExercises] = useState(['Puxada Frontal', 'Remada Curvada', 'Remada Unilateral', 'Levantamento Terra']);
 const [groupSelected, setGroupSelected] = useState('costa');

const navigation = useNavigation<AppNavigatorRoutesProps>();

 function handleOpenExerciseDetails() {
    navigation.navigate('exercise');
 }

    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList 
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Group 
                name={item} 
                isActive={groupSelected === item }
                onPress={() => setGroupSelected( item )} 
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            _contentContainerStyle={{ px: 8 }}
            my={10}
            maxH={10}
            minH={10}
            />

          <VStack flex={1} px={8}>
            <HStack justifyContent="space-between" mb={5}>
               <Heading color="gray.200" fontSize="md" fontFamily="heading">
                Exercícios
               </Heading> 

               <Text color="gray.200" fontSize="sm">
                {exercises.length}
               </Text>
            </HStack>

            <FlatList 
                data={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => ( 
                <ExerciseCard 
                    onPress={handleOpenExerciseDetails}
                />
            )}
                showsVerticalScrollIndicator={false}
                _contentContainerStyle={{ paddingBottom : 20}}
            />
          </VStack>
        </VStack>
    );
}