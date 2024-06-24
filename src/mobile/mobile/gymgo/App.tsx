import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/loading';

import { AuthProvider } from 'src/context/authContext';

export default function App() {
    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

    return (
        <AuthProvider>
            <NativeBaseProvider theme={THEME}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                {fontsLoaded ? <Routes /> : <Loading />}
            </NativeBaseProvider>
        </AuthProvider>
    );
}


