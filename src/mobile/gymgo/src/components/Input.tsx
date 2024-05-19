import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({...rest }: IInputProps) {
    return (
        <NativeBaseInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={0}
        fontSize="md"
        color="white"
        fontFamily="body"
        mb={4}
        marginLeft={5}
        marginRight={5}
        placeholderTextColor="yellow.300"
        _focus={{
            bg: "gray.700",
            borderWidth: 1,
            borderColor: "yellow.300"
        }} 
        {...rest}
        />
    );
}