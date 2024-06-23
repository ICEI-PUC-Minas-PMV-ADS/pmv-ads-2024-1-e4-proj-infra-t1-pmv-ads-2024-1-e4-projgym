import { useContext } from "react";
import AuthContext from "src/context/authContext";
import { useTheme, Box } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const { signed } = useContext(AuthContext)

    const { colors } = useTheme();

    const theme = DefaultTheme;
    theme.colors.background = colors.gray[700];

    return (
        <Box flex={1} bg="gray.700">
            <NavigationContainer theme={theme}>
                {signed ? <AppRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </Box>
    );
}