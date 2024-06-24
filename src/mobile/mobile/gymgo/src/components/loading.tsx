import { Spinner, Center } from 'native-base';

export function Loading() {
    return (
        <Center flex={1} bg="gray.700">
            <Spinner color="yellow.500"/>
        </Center>
    );
}